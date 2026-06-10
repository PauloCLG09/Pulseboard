import RevenueChart from "@/components/dashboard/RevenueChart";

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Analytics</h1>

      <p className="text-muted-foreground mt-2 mb-8">
        View business performance and metrics.
      </p>

      <div className="grid grid-cols-1 gap-6">
        <RevenueChart />
      </div>
    </div>
  );
}
