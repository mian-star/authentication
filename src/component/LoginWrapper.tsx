'use client'

import { useState } from 'react'
import LoginPage from './LoginForm'

export default function LoginWrapper() {
  const [showLogin, setShowLogin] = useState(false)

  return (
    <div className="text-center">
      <button
        onClick={() => setShowLogin(true)}
        className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
      >
        Create Your Bento
      </button>

      {showLogin && (
        <div className="mt-6">
          <LoginPage />
        </div>
      )}
    </div>
  )
}
