import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Vendor Management', path: '/vendors' },
  { name: 'Vendor Registration', path: '/register' },
  // Future items will be added here
]

function Sidebar() {
  const location = useLocation()
  return (
    <aside className="w-64 h-screen bg-primary text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">VMS</h1>
      <nav className="flex-1 space-y-2">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`block px-3 py-2 rounded hover:bg-primary/80 ${location.pathname.startsWith(item.path) ? 'bg-primary/70' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-auto text-sm opacity-80">© 2026</div>
    </aside>
  )
}

export default Sidebar;
