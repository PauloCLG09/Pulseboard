"use client";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  ClipboardList,
} from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: Users },
  { name: "Analytics", icon: BarChart3 },
  { name: "Tasks", icon: ClipboardList },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`
    fixed inset-y-0 left-0 z-50 w-64 bg-zinc-950 border-r border-zinc-800 p-4
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:flex
  `}
    >
      <h1 className="text-2xl font-bold text-white mb-4">PulseBoard</h1>

      <button
        onClick={() => setSidebarOpen(false)}
        className="md:hidden text-zinc-400 mb-6"
      >
        ✕
      </button>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-zinc-900 hover:text-white transition"
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
