/** Nextera — single-company CRM (not multi-tenant). */
export const COMPANY = {
  id: "nextera",
  name: "Nextera",
  ice: "",
  rc: "",
  address: "",
  phone: "",
  website: "https://nextera.com",
} as const

export const COMPANY_NAME = COMPANY.name

export const DEFAULT_LOGIN_EMAIL = "admin@nextera.com"
export const DEFAULT_LOGIN_PASSWORD = "password123"
