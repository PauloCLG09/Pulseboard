"use client"
import { LayoutDashboard,Users,BarChart3,Settings,ClipboardList } from "lucide-react"  

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: Users },
  { name: "Analytics", icon: BarChart3 },
  { name: "Tasks", icon: ClipboardList },
  { name: "Settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-zinc-950 border-r border-zinc-800 p-4">
      <h1 className="text-2xl font-bold text-white mb-10">
        PulseBoard
      </h1>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.name}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}