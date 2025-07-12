"use client";
import PrimaryBtn from "@/components/button/PrimaryButton";
import Checkbox from "@/components/checkbox/CheckBox";
import Link from "next/link";
import { useState } from "react";
import { HelpSection } from "./HelpSection";
import TextField from "@/components/custom-input/TextField";
import PasswordField from "@/components/custom-input/PasswordField";

export function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    keepLoggedIn: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-gray-900">
          Enter Your Username and Password to Login
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <TextField
          label="Username"
          name="username"
          placeholder="e.g. jhondoe123"
          value={formData.username}
          onChange={handleInputChange}
        />

        <PasswordField
          label="Password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleInputChange}
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

        <PrimaryBtn
          type="submit"
          className="w-full"
          size="lg"
          variant="primary"
        >
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
  );
}
