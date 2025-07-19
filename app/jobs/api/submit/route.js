// app/jobs/api/submit/route.js
import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request) {
  const formData = await request.formData()
  
  // Here you would typically save to database
  const application = {
    jobId: formData.get('jobId'),
    userId: formData.get('userId'),
    name: formData.get('name'),
    email: formData.get('email'),
    coverLetter: formData.get('coverLetter'),
    resume: formData.get('resume')?.name || 'No resume uploaded',
  }

  // Send email notifications
  await sendEmail({
    to: 'your-email@vjc.overseas.com',
    subject: `New Application for Job ${application.jobId}`,
    html: `
      <h2>New Job Application</h2>
      <p><strong>Position:</strong> ${application.jobId}</p>
      <p><strong>Applicant:</strong> ${application.name} (${application.email})</p>
      <p><strong>Resume:</strong> ${application.resume}</p>
      <h3>Cover Letter:</h3>
      <p>${application.coverLetter}</p>
    `
  })

  return NextResponse.json({ success: true })
}