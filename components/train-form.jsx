"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TrainForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    route: "",
    status: "On Time",
    passengers: "",
    departure: "",
    arrival: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.route || !formData.passengers || !formData.departure || !formData.arrival) {
      alert("Please fill in all fields")
      return
    }
    onSubmit({
      ...formData,
      passengers: Number.parseInt(formData.passengers),
    })
    setFormData({
      name: "",
      route: "",
      status: "On Time",
      passengers: "",
      departure: "",
      arrival: "",
    })
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-300">
            Train Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="e.g., Express 101"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="route" className="text-slate-300">
            Route
          </Label>
          <Input
            id="route"
            name="route"
            type="text"
            placeholder="e.g., Mumbai - Delhi"
            value={formData.route}
            onChange={handleInputChange}
            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="passengers" className="text-slate-300">
            Passengers
          </Label>
          <Input
            id="passengers"
            name="passengers"
            type="number"
            placeholder="e.g., 250"
            value={formData.passengers}
            onChange={handleInputChange}
            className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="status" className="text-slate-300">
            Status
          </Label>
          <Select
            value={formData.status}
            onValueChange={(value) => setFormData((prev) => ({ ...prev, status: value }))}
          >
            <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              <SelectItem value="On Time">On Time</SelectItem>
              <SelectItem value="Delayed">Delayed</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="departure" className="text-slate-300">
            Departure Time
          </Label>
          <Input
            id="departure"
            name="departure"
            type="time"
            value={formData.departure}
            onChange={handleInputChange}
            className="bg-slate-700/50 border-slate-600 text-white"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="arrival" className="text-slate-300">
            Arrival Time
          </Label>
          <Input
            id="arrival"
            name="arrival"
            type="time"
            value={formData.arrival}
            onChange={handleInputChange}
            className="bg-slate-700/50 border-slate-600 text-white"
            required
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
          Add Train
        </Button>
      </div>
    </form>
  )
}
