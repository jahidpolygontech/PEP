"use client"

import { Checkbox } from "@/components/checkbox/CheckBox"
import { Input } from "@/components/input/PrimaryInput"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { HelpSection } from "./HelpSection"
import PrimaryBtn from "@/components/button/PrimaryButton"




export function LoginForm() {
  const [formData, setFormData] = useState({
    username: "", 
    password: "",
    keepLoggedIn: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl
         font-semibold text-gray-900">Enter Your Username and Password to Login</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="username"
          name="username"
          placeholder="e.g. jhondoe123"
          value={formData.username}
          onChange={handleInputChange}
          required
        />

        <Input
          label="password"
          name="password"
          showPasswordToggle
          value={formData.password}
          onChange={handleInputChange}
          required
        />


        <div className="flex flex-wrap text-sm items-center justify-between">
          <Checkbox
            name="keepLoggedIn"
            label="Keep me logged in"
            showInfo
            checked={formData.keepLoggedIn}
            onChange={handleInputChange}
          />
          <Link href="/" className="text-primary">
            Forgot Username or Password?
          </Link>
        </div>

        <PrimaryBtn type="submit" className="w-full bg-primary" size="lg">
          Login
        </PrimaryBtn>

        <div className="text-center">
          <span className="text-sm text-gray-600">Don&apos;t have account? </span>
          <Link href="/" className="text-primary hover:underline">
            Create Account
          </Link>
        </div>
      </form>
      <HelpSection />
    </div>
  )
}
