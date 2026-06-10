"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Analytics", icon: BarChart3, href: "/analytics" },
  { name: "Tasks", icon: ClipboardList, href: "/tasks" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();
  return (
    <aside
      className={`
    fixed inset-y-0 left-0 z-50 w-64 bg-background border-r border-border p-4
    transform transition-transform duration-300
    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
    md:translate-x-0 md:static md:flex md:flex-col
  `}
    >
      <h1 className="text-2xl font-bold text-foreground mb-4">PulseBoard</h1>

      <button
        onClick={() => setSidebarOpen(false)}
        className="md:hidden text-muted-foreground mb-6"
      >
        ✕
      </button>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition
  ${
    isActive
      ? "bg-purple-600 text-white"
      : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
  }
`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
