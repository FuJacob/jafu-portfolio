"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundPattern from "@/components/BackgroundPattern";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === "69") {
      // Store auth in localStorage
      localStorage.setItem("jacob_fu_admin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid password");
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen w-full bg-white relative flex items-center justify-center p-4">
      <BackgroundPattern />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white border border-gray-200 p-8 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Login</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-gray-400 transition"
                placeholder="Enter password"
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 px-4 hover:bg-gray-800 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
