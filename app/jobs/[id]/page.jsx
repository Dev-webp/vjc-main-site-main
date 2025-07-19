// app/jobs/[id]/page.jsx
import JobApplicationForm from '../components/JobApplicationForm'
import ProtectedRoute from '../components/ProtectedRoute'

async function getJobDetails(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/listings/${id}`)
  return await res.json()
}

export default async function JobDetailPage({ params }) {
  const job = await getJobDetails(params.id)

  return (
    <ProtectedRoute>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span>{job.company}</span>
            <span className="mx-2">•</span>
            <span>{job.location}</span>
          </div>
          
          <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: job.description }} />
          
          <JobApplicationForm jobId={params.id} />
        </div>
      </div>
    </ProtectedRoute>
  )
}