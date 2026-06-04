// Mock authentication for Nextera (single-company CRM)

import { COMPANY, COMPANY_NAME, DEFAULT_LOGIN_EMAIL, DEFAULT_LOGIN_PASSWORD } from "@/lib/company"

// Types
interface User {
  id: string
  fullName: string
  email: string
  role: "Admin" | "Editor" | "Viewer"
  companyId: string
  avatar?: string
}

interface Company {
  id: string
  name: string
  ice?: string
  rc?: string
  address?: string
  phone?: string
  website?: string
  logo?: string
}

const nexteraCompany: Company = { ...COMPANY }

// Default admin for local development
const mockUsers: (User & { password: string })[] = [
  {
    id: "user-1",
    fullName: "Noureddine Elm",
    email: DEFAULT_LOGIN_EMAIL,
    password: DEFAULT_LOGIN_PASSWORD,
    role: "Admin",
    companyId: COMPANY.id,
    avatar: "/me.webp",
  },
]

const mockCompanies: Company[] = [nexteraCompany]

// Helper to generate IDs
const generateId = () => `id-${Math.random().toString(36).substring(2, 9)}`

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false

  const user = localStorage.getItem("user")
  return !!user
}

// Register a new Nextera team member (always tied to Nextera)
export const registerUser = async (
  fullName: string,
  email: string,
  password: string,
): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const existingUser = mockUsers.find((user) => user.email === email)
  if (existingUser) {
    throw new Error("Email already in use")
  }

  const userId = generateId()
  const user: User & { password: string } = {
    id: userId,
    fullName,
    email,
    password,
    role: "Admin",
    companyId: COMPANY.id,
  }

  const { password: _, ...userWithoutPassword } = user
  localStorage.setItem("user", JSON.stringify(userWithoutPassword))
  localStorage.setItem("company", JSON.stringify(nexteraCompany))

  return userWithoutPassword
}

// Login user
export const loginUser = async (email: string, password: string): Promise<User> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const user = mockUsers.find((user) => user.email === email && user.password === password)

  if (!user) {
    throw new Error("Invalid email or password")
  }

  const company = mockCompanies.find((c) => c.id === user.companyId)

  const { password: _, ...userWithoutPassword } = user
  localStorage.setItem("user", JSON.stringify(userWithoutPassword))

  if (company) {
    localStorage.setItem("company", JSON.stringify(company))
  }

  return userWithoutPassword
}

// Logout user
export const logoutUser = (): void => {
  localStorage.removeItem("user")
}

export const updateCompanyProfile = async (formData: Record<string, unknown>): Promise<Company> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const companyJson = localStorage.getItem("company")
  let company: Company = companyJson
    ? JSON.parse(companyJson)
    : { ...nexteraCompany, name: COMPANY_NAME }

  company = {
    ...company,
    name: COMPANY_NAME,
    ...formData,
  }

  localStorage.setItem("company", JSON.stringify(company))

  return company
}
