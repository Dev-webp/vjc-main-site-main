// app/jobs/api/listings/route.js
import { NextResponse } from 'next/server'

// Mock data - replace with your actual database calls
const mockJobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "VJC Overseas",
    location: "Singapore",
    type: "Full-time",
    salary: "$5,000 - $7,000",
    shortDescription: "Looking for skilled software engineers",
    tags: ["Tech", "Development"]
  },
  // Add more mock jobs as needed
]

export async function GET() {
  try {
    // In a real app, you would fetch from your database here
    // const jobs = await db.job.findMany({...})
    
    return NextResponse.json(mockJobs)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}