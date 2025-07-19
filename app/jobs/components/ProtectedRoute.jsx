// app/jobs/components/ProtectedRoute.jsx
'use client'
import { useAuth } from './AuthModal'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function ProtectedRoute({ children }) {
  const { user, setShowAuthModal } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      setShowAuthModal(true)
      router.push('/jobs')
    }
  }, [user])

  return user ? children : null
}