const sales = [
    {
        name: "Olivia Martin",
        email: "olivia@example.com",
        amount: "+$1,999",
    },

    {
        name: "Jackson Lee",
        email: "jackson@example.com",
        amount: "+$39",
    },

    {
        name: "Isabella Nguyen",
        email: "isabella@example.com",
        amount: "+$299",
    },
]

export default function RecentSales() {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-card-foreground text-xl font-semibold">
          Recent Sales
        </h3>
        <p className="text-muted-foreground text-sm mt-1">
          You made 265 sales this month
        </p>
      </div>
      <div className="space-y-5">
        {sales.map((sale) => (
          <div key={sale.email} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500" />
              <div>
                <p className="text-card-foreground text-sm font-medium">
                  {sale.name}
                </p>
                <p className="text-muted-foreground text-sm">{sale.email} </p>
              </div>
            </div>
            <p className="text-green-400 font-medium"> {sale.amount} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
