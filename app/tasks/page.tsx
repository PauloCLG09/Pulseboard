const tasks = [
  {
    id: 1,
    title: "Review dashboard design",
    status: "Completed",
  },
  {
    id: 2,
    title: "Update analytics page",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Fix mobile sidebar",
    status: "Pending",
  },
];

export default function TasksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Tasks</h1>

      <p className="text-muted-foreground mt-2 mb-8">
        Track project progress and pending work.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">Project Tasks</h2>

        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between border border-border rounded-xl p-4"
            >
              <p>{task.title}</p>

              <span className="px-3 py-1 rounded-full text-sm bg-muted">
                {task.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
