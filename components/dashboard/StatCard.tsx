import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
}

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/40 transition">
      <div className="flex items-center justify-between mb-4">
        <p className="text-zinc-400 text-sm">{title}</p>

        <div className="p-2 rounded-lg bg-zinc-900">
          <Icon className="text-purple-400" size={20} />
        </div>
      </div>

      <h3 className="text-3xl font-bold text-white">
        {value}
      </h3>

      <p className="text-sm text-green-400 mt-2">
        {change}
      </p>
    </div>
  )
}