"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Train, Shield, Clock, BarChart3 } from "lucide-react"

export default function HomePage() {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLogin) {
      // Simple validation for login
      if (!formData.username || !formData.password) {
        alert("Please fill in all fields")
        return
      }
      // Simulate login success and redirect to dashboard
      router.push("/dashboard")
    } else {
      // Validation for registration
      if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
        alert("Please fill in all fields")
        return
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match")
        return
      }
      // Simulate registration success and redirect to dashboard
      router.push("/dashboard")
    }
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Side - Branding and Features */}
          <div className="space-y-8">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-xl">
                <Train className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white">Trainsta</h1>
            </div>

            {/* Feature Highlight */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Train className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-white">Advanced Train Management</h2>
                  <p className="text-slate-300 mt-2">
                    Monitor and control your entire fleet with real-time tracking and automated scheduling systems.
                  </p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2">
                  <span className="text-slate-300 text-sm">Real-time Tracking</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2">
                  <span className="text-slate-300 text-sm">Automated Scheduling</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 py-2">
                  <span className="text-slate-300 text-sm">Fleet Management</span>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300 text-sm">Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300 text-sm">24/7 Monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300 text-sm">Analytics Dashboard</span>
              </div>
            </div>

            {/* Learn More Button */}
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent">
              Learn More About Trainsta
            </Button>
          </div>

          {/* Right Side - Login/Register Form */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md bg-slate-800/80 backdrop-blur-sm border-slate-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-white">
                  {isLogin ? "Login into the train manager" : "Create your account"}
                </CardTitle>
                <CardDescription className="text-slate-400">
                  {isLogin ? "Enter your credentials to access the dashboard" : "Sign up to start managing your trains"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ex: john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-slate-300">
                      {isLogin ? "Enter UserName or Email :" : "Username"}
                    </Label>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="ex: john doe"
                      value={formData.username}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-300">
                      {isLogin ? "Enter Password :" : "Password"}
                    </Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••••"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                      required
                    />
                  </div>

                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-slate-300">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••••"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                        required
                      />
                    </div>
                  )}

                  {isLogin && (
                    <div className="text-center">
                      <button type="button" className="text-blue-400 hover:text-blue-300 text-sm">
                        Forget Password ? Reset Password.
                      </button>
                    </div>
                  )}

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    {isLogin ? "Login" : "Create Account"}
                  </Button>

                  <div className="text-center">
                    <span className="text-slate-400 text-sm">
                      {isLogin ? "Don't have an account ? " : "Already have an account ? "}
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                    >
                      {isLogin ? "Register Now." : "Login Now."}
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
