"use client";
import { useState } from "react";
import { User, Lock, ArrowRight } from 'lucide-react'; // Import icons

export default function AdminLogin({ onLogin }) {
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "1234";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state for button feedback

  async function handleLogin(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);

    // Simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800));

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      onLogin(true);
    } else {
      setError(true);
      // Optional: Clear fields on failure
      setPassword(""); 
    }
    setLoading(false);
  }

  // Suggesting a modern header for a Next.js Admin Dashboard
  const DASHBOARD_TITLE = "Metadata & Content Hub";

  return (
    // NOTE: The parent component should handle the full-screen background. 
    // We are only styling the form wrapper here.
    <form
      onSubmit={handleLogin}
      // Sexy Card Styling: Modern shadow, rounded corners, slight scale on hover
      className="
        bg-white p-8 md:p-10 lg:p-12 
        rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] 
        w-full max-w-sm mx-auto space-y-6 
        transform transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
        border-t-4 border-orange-500
      "
    >
      <div className="text-center space-y-2">
        {/* Modern Title with Orange Accent */}
        <h1 className="text-3xl font-extrabold text-gray-800">
          Admin Sign In
        </h1>
        <p className="text-sm text-gray-500">
          Access the <strong className="text-orange-500">{DASHBOARD_TITLE}</strong>
        </p>
      </div>

      {/* Input Group 1: Username */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700 sr-only">Username</label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
          <input
            type="text"
            placeholder="admin"
            value={username}
            onChange={e => setUsername(e.target.value)}
            // Sexy Input Styling: Increased padding, soft focus ring, no default border
            className="
              w-full pl-10 pr-4 py-3 
              text-gray-800 border-b-2 border-gray-200 focus:border-orange-500 
              rounded-lg transition-all duration-300 focus:outline-none 
              placeholder-gray-400 font-medium bg-gray-50
            "
            required
          />
        </div>
      </div>

      {/* Input Group 2: Password */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700 sr-only">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-orange-400" />
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="
              w-full pl-10 pr-4 py-3 
              text-gray-800 border-b-2 border-gray-200 focus:border-orange-500 
              rounded-lg transition-all duration-300 focus:outline-none 
              placeholder-gray-400 font-medium bg-gray-50
            "
            required
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-center text-red-500 font-medium pt-2 animate-pulse">
          Invalid credentials. Please try again.
        </p>
      )}

      {/* Login Button */}
      <button
        type="submit"
        disabled={loading}
        // Sexy Button Styling: Vibrant orange, shadow, hover effect, loading state
        className={`
          w-full flex items-center justify-center gap-2 
          py-3 mt-6 
          text-lg font-bold text-white 
          rounded-xl 
          transition-all duration-300 
          shadow-lg 
          ${loading 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-orange-500 hover:bg-orange-600 shadow-orange-300/50 hover:shadow-orange-400/70"
          }
        `}
      >
        {loading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing In...
          </>
        ) : (
          <>
            Secure Login <ArrowRight className="w-5 h-5 ml-1" />
          </>
        )}
      </button>

     
    </form>
    // NOTE: Removed the parent div with min-h-screen and bg-gray-100 
    // to let the main Page component handle the full background.
  );
}