"use client"

import type React from "react"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

interface PageAnimationProps {
  children: React.ReactNode
  className?: string
}

export function PageAnimation({ children, className }: PageAnimationProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(false)
    const timer = setTimeout(() => {
      setAnimate(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        animate ? "opacity-100 scale-100 transform-none" : "opacity-0 scale-75 origin-center",
        className,
      )}
    >
      {children}
    </div>
  )
}
