// app/jobs/components/JobFilters.jsx
'use client'
import { useState } from 'react'

export default function JobFilters() {
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    experience: ''
  })

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">All Locations</option>
            <option value="Singapore">Singapore</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Dubai">Dubai</option>
          </select>
        </div>
        
        {/* Add other filter fields similarly */}
      </div>
    </div>
  )
}