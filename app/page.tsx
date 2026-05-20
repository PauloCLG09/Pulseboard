import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import { DollarSign,Users,Activity,CreditCard,} from "lucide-react"
import RevenueChart from "@/components/dashboard/RevenueChart"
import RecentSales from "@/components/dashboard/RecentSales";
import UsersTable from "@/components/dashboard/UsersTable";


export default function Home() {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back 👋</h1>

        <p className="text-zinc-400 mt-2 mb-8">
          Here’s what’s happening today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <StatCard
            title="Revenue"
            value="$45,231"
            change="+20.1%"
            icon={DollarSign}
          />

          <StatCard title="Users" value="2,350" change="+15.3%" icon={Users} />

          <StatCard
            title="Activity"
            value="12,234"
            change="+8.2%"
            icon={Activity}
          />

          <StatCard
            title="Sales"
            value="1,423"
            change="+12.5%"
            icon={CreditCard}
          />
          <div className="grid grid-cols-1 2xl:grid-cols-3 gap-6 mt-8">
            {" "}
            <div className="2xl:col-span-2">
              {" "}
              <RevenueChart />{" "}
            </div>{" "}
            <RecentSales /> <UsersTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}