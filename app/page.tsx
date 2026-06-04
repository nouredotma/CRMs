"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Building2, Eye, EyeOff, Loader2, Lock, Mail, User, type LucideIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { isAuthenticated, loginUser, registerUser } from "@/lib/auth"
import { cn } from "@/lib/utils"

const authInputClassName = "h-11 rounded-full border-2 border-neutral-200 bg-white"
const authInputWithIconClassName = cn(authInputClassName, "pl-10")
const authFieldIconClassName =
  "pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
const authPasswordToggleIconClassName = "h-5 w-5 text-neutral-400/60"

const authActionsClassName = "flex flex-col gap-4"

function AuthSubmitButton({
  label,
  hoverLabel,
  loading,
  loadingLabel,
  disabled,
}: {
  label: string
  hoverLabel: string
  loading: boolean
  loadingLabel: string
  disabled?: boolean
}) {
  return (
    <Button
      type="submit"
      disabled={disabled}
      className="group h-11 w-full cursor-pointer rounded-full border-2 border-primary bg-primary text-white hover:bg-primary"
    >
      {loading ? (
        <span className="inline-flex items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {loadingLabel}
        </span>
      ) : (
        <span className="relative block h-5 overflow-hidden">
          <span className="flex flex-col items-center transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <span className="flex h-5 items-center leading-5">{label}</span>
            <span className="flex h-5 items-center leading-5">{hoverLabel}</span>
          </span>
        </span>
      )}
    </Button>
  )
}

function AuthInputWithIcon({
  id,
  name,
  label,
  icon: Icon,
  type = "text",
  placeholder,
  autoComplete,
  value,
  onChange,
  disabled,
}: {
  id: string
  name: string
  label: string
  icon: LucideIcon
  type?: string
  placeholder: string
  autoComplete?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Icon className={authFieldIconClassName} />
        <Input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={authInputWithIconClassName}
        />
      </div>
    </div>
  )
}

function AuthPasswordField({
  id,
  value,
  onChange,
  disabled,
  autoComplete,
  showPassword,
  onTogglePassword,
  showToggle,
}: {
  id: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  autoComplete: string
  showPassword: boolean
  onTogglePassword: () => void
  showToggle: boolean
}) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id}>Password</Label>
      <div className="relative">
        <Lock className={authFieldIconClassName} />
        <Input
          id={id}
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="••••••••"
          autoComplete={autoComplete}
          required
          value={value}
          onChange={onChange}
          disabled={disabled}
          spellCheck="false"
          autoCorrect="off"
          className={cn(authInputWithIconClassName, "pr-11")}
        />
        {showToggle && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full cursor-pointer px-3 hover:bg-transparent"
            onClick={onTogglePassword}
            disabled={disabled}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className={authPasswordToggleIconClassName} />
            ) : (
              <Eye className={authPasswordToggleIconClassName} />
            )}
            <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
          </Button>
        )}
      </div>
    </div>
  )
}

function AuthSocialDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs">
        <span className="bg-white px-2 text-neutral-500">Or continue with</span>
      </div>
    </div>
  )
}

function GoogleSignInButton({ isLoading }: { isLoading: boolean }) {
  return (
    <Button
      type="button"
      variant="outline"
      className="h-11 w-full cursor-pointer rounded-full border-2 border-neutral-200 bg-white hover:border-primary hover:bg-neutral-50"
      disabled={isLoading}
      onClick={() => toast.info("Google coming soon. We didn't add this feature yet.")}
    >
      <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
        />
      </svg>
      Continue with Google
    </Button>
  )
}

export default function AuthPage() {
  const router = useRouter()
  const pathname = usePathname()
  const isRegister = pathname === "/register"

  const [animate, setAnimate] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    password: "",
    companyName: "",
  })

  useEffect(() => {
    if (isAuthenticated() && !isRegister) {
      const userData = JSON.parse(localStorage.getItem("user") || "{}")

      if (userData.role === "Admin") {
        router.push("/dashboard")
      } else if (userData.role === "Editor") {
        router.push("/dashboard/editor")
      } else if (userData.role === "Viewer") {
        router.push("/dashboard/viewer")
      }
    }

    const timer = setTimeout(() => setAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [router, isRegister])

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (!loginData.email || !loginData.password) {
        throw new Error("Email and password are required")
      }

      await loginUser(loginData.email, loginData.password)
      router.push("/dashboard")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed")
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (
        !registerData.fullName ||
        !registerData.email ||
        !registerData.password ||
        !registerData.companyName
      ) {
        throw new Error("All fields are required")
      }

      if (registerData.password.length < 6) {
        throw new Error("Password must be at least 6 characters")
      }

      await registerUser(
        registerData.fullName,
        registerData.email,
        registerData.password,
        registerData.companyName,
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white md:flex-row">
      <div
        className={cn(
          "relative hidden h-screen transform flex-col bg-[#f5f4f3] transition-transform duration-500 ease-out md:flex md:w-1/2",
          animate ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="relative m-2 min-h-0 flex-1 overflow-hidden rounded-lg bg-black">
          <div className="logo-container absolute top-8 left-8 z-10">
            <div className="ball" />
            <h2 className="logo-text text-2xl font-bold text-white">Luz</h2>
          </div>

          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="max-w-md px-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                Simplifiez votre entreprise
              </h1>
              <p className="mt-4 text-lg text-white/80">Une plateforme. Contrôle complet.</p>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 z-10 flex items-center">
            <img src="/logo.png" alt="Ouz Logo" className="h-8 w-auto" />
            <span className="ml-2 text-sm font-medium text-white">by nordix</span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-1 transform flex-col items-center justify-center overflow-y-auto bg-white p-6 transition-transform duration-500 ease-out md:w-1/2",
          animate ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="w-full max-w-md space-y-6 py-4">
          <div className="space-y-1 text-center">
            <h2 className="text-3xl font-bold">
              {isRegister ? "Create your Luz account 👋" : "Welcome to Luz 👋"}
            </h2>
            <p className="text-neutral-500">
              {isRegister
                ? "Register as an administrator to access your dashboard"
                : "Log in to your account to continue"}
            </p>
          </div>

          {isRegister ? (
            <form onSubmit={handleRegisterSubmit} className="space-y-2">
              {error && (
                <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>
              )}

              <AuthInputWithIcon
                id="fullName"
                name="fullName"
                label="Full Name"
                icon={User}
                placeholder="John Doe"
                autoComplete="name"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />

              <AuthInputWithIcon
                id="email"
                name="email"
                label="Email"
                icon={Mail}
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />

              <AuthPasswordField
                id="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                disabled={isLoading}
                autoComplete="new-password"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                showToggle={!!registerData.password}
              />

              <AuthInputWithIcon
                id="companyName"
                name="companyName"
                label="Company Name"
                icon={Building2}
                placeholder="Acme Inc."
                value={registerData.companyName}
                onChange={handleRegisterChange}
                disabled={isLoading}
              />

              <div className={authActionsClassName}>
                <AuthSubmitButton
                  label="Create Account"
                  hoverLabel="Join Luz"
                  loading={isLoading}
                  loadingLabel="Creating account..."
                  disabled={isLoading}
                />
                <AuthSocialDivider />
                <GoogleSignInButton isLoading={isLoading} />
              </div>
            </form>
          ) : (
            <form onSubmit={handleLoginSubmit} className="space-y-2">
              {error && (
                <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">{error}</div>
              )}

              <AuthInputWithIcon
                id="email"
                name="email"
                label="Email"
                icon={Mail}
                type="email"
                placeholder="name@example.com"
                autoComplete="email"
                value={loginData.email}
                onChange={handleLoginChange}
                disabled={isLoading}
              />

              <AuthPasswordField
                id="password"
                value={loginData.password}
                onChange={handleLoginChange}
                disabled={isLoading}
                autoComplete="current-password"
                showPassword={showPassword}
                onTogglePassword={() => setShowPassword(!showPassword)}
                showToggle={!!loginData.password}
              />

              <div className={authActionsClassName}>
                <AuthSubmitButton
                  label="Login"
                  hoverLabel="Sign in"
                  loading={isLoading}
                  loadingLabel="Logging in..."
                  disabled={isLoading}
                />
                <AuthSocialDivider />
                <GoogleSignInButton isLoading={isLoading} />
              </div>
            </form>
          )}

          <div className="mt-2 text-center text-sm">
            {isRegister ? (
              <>
                Already have an account?{" "}
                <Link href="/" className="font-medium text-primary underline underline-offset-4">
                  Login
                </Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{" "}
                <Link href="/register" className="font-medium text-primary underline underline-offset-4">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .logo-container {
          position: relative;
          width: 200px;
          height: 50px;
        }

        .ball {
          position: absolute;
          top: 4px;
          left: 0;
          height: 40px;
          width: 40px;
          background-color: #ff4500;
          border-radius: 50%;
          animation: ballmove 4s infinite alternate;
          z-index: 1;
          box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.3);
        }

        .logo-text {
          position: absolute;
          font-size: 2rem;
          display: inline-block;
          white-space: nowrap;
          font-weight: bold;
          overflow: hidden;
          top: 0;
          left: 0;
          color: white;
          animation: textreveal 4s infinite alternate;
        }

        @keyframes ballmove {
          0% {
            transform: translate(0px, 3px) scale(0.1);
          }
          10% {
            transform: translateX(0px) scale(0.5);
          }
          40% {
            transform: translateX(55px) scale(0.5);
          }
          60% {
            transform: translate(50px, 3px) scale(0.1);
          }
          70% {
            transform: translate(50px, 3px) scale(0.15);
          }
          80% {
            transform: translate(50px, 3px) scale(0.1);
          }
          90% {
            transform: translate(50px, 3px) scale(0.15);
          }
          100% {
            transform: translate(50px, 3px) scale(0.1);
          }
        }

        @keyframes textreveal {
          0% {
            width: 0;
          }
          10% {
            width: 0;
          }
          40% {
            width: 100px;
          }
          100% {
            width: 100px;
          }
        }
      `}</style>
    </div>
  )
}
