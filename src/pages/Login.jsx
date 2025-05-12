import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider)
      navigate('/dashboard')
    } catch (error) {
      console.error("Login error:", error)
    }
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">eBay Video Game Flipper</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </div>
  )
}
