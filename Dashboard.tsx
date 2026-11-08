import React, { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

function Dashboard() {
  const [stats, setStats] = useState<{ totalVendors: number }>({ totalVendors: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      const { count, error } = await supabase
        .from('vendors')
        .select('*', { count: 'exact', head: true })
      if (error) {
        setError(error.message)
      } else {
        setStats({ totalVendors: count || 0 })
      }
      setLoading(false)
    }
    fetchStats()
  }, [])

  if (loading) return <div className="p-4">Loading dashboard…</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded p-4">
          <h3 className="text-lg font-medium">Total Vendors</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalVendors}</p>
        </div>
        {/* Additional cards will be added in later phases */}
      </div>
    </div>
  )
}

export default Dashboard
