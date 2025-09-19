"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Train, Plus, Settings, BarChart3, LogOut, Clock, MapPin, Users } from "lucide-react"
import TrainForm from "@/components/train-form"

export default function DashboardPage() {
  const router = useRouter()
  const [trains, setTrains] = useState([
    {
      id: 1,
      name: "Express 101",
      route: "Mumbai - Delhi",
      status: "On Time",
      passengers: 245,
      departure: "14:30",
      arrival: "22:15",
    },
    {
      id: 2,
      name: "Rajdhani 202",
      route: "Delhi - Kolkata",
      status: "Delayed",
      passengers: 189,
      departure: "16:45",
      arrival: "08:30+1",
    },
    {
      id: 3,
      name: "Shatabdi 303",
      route: "Chennai - Bangalore",
      status: "On Time",
      passengers: 156,
      departure: "06:00",
      arrival: "11:45",
    },
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const handleAddTrain = (newTrain) => {
    setTrains([...trains, { ...newTrain, id: trains.length + 1 }])
    setShowAddForm(false)
  }

  const handleLogout = () => {
    router.push("/")
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "on time":
        return "bg-green-500"
      case "delayed":
        return "bg-red-500"
      case "cancelled":
        return "bg-gray-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Train className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Trainsta Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => router.push("/analytics")}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Analytics
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/settings")}
              className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-red-600 text-red-300 hover:bg-red-900/20 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Trains</p>
                  <p className="text-2xl font-bold text-white">{trains.length}</p>
                </div>
                <Train className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">On Time</p>
                  <p className="text-2xl font-bold text-green-400">
                    {trains.filter((t) => t.status === "On Time").length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-green-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Total Passengers</p>
                  <p className="text-2xl font-bold text-white">
                    {trains.reduce((sum, train) => sum + train.passengers, 0)}
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm">Active Routes</p>
                  <p className="text-2xl font-bold text-white">{new Set(trains.map((t) => t.route)).size}</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="trains" className="space-y-6">
          <TabsList className="bg-slate-800/80 border-slate-700">
            <TabsTrigger value="trains" className="data-[state=active]:bg-blue-600">
              Train Management
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-blue-600">
              Schedule
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trains" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Active Trains</h2>
              <Button onClick={() => setShowAddForm(true)} className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add New Train
              </Button>
            </div>

            {showAddForm && (
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Add New Train</CardTitle>
                  <CardDescription className="text-slate-400">
                    Enter the details for the new train service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TrainForm onSubmit={handleAddTrain} onCancel={() => setShowAddForm(false)} />
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              {trains.map((train) => (
                <Card key={train.id} className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 p-2 rounded-lg">
                          <Train className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{train.name}</h3>
                          <p className="text-slate-400">{train.route}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <Badge className={`${getStatusColor(train.status)} text-white`}>{train.status}</Badge>
                        <div className="text-right">
                          <p className="text-white font-medium">{train.passengers} passengers</p>
                          <p className="text-slate-400 text-sm">
                            {train.departure} → {train.arrival}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Today's Schedule</CardTitle>
                <CardDescription className="text-slate-400">
                  Overview of all train departures and arrivals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trains.map((train) => (
                    <div key={train.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(train.status)}`} />
                        <div>
                          <p className="text-white font-medium">{train.name}</p>
                          <p className="text-slate-400 text-sm">{train.route}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white">Departure: {train.departure}</p>
                        <p className="text-slate-400 text-sm">Arrival: {train.arrival}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
