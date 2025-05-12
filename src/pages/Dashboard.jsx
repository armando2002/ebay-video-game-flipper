import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Dashboard() {
  const handleLogout = () => signOut(auth)

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">🔥 Profitable eBay Video Games</h2>
        <button onClick={handleLogout} className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      </div>

      <div className="grid gap-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <p className="text-gray-600">Profitable listings will appear here...</p>
        </div>
      </div>
    </div>
  )
}
