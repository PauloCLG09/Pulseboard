import { users } from "@/app/data/users";

export default function UsersTable() {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mt-8">
      
      <div className="mb-6">
        <h3 className="text-white text-xl font-semibold"> Users </h3>
        <p className="text-zinc-400 text-sm mt-1">
          Manage your team members and permissions
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-800">
              <th className="text-left py-3 text-zinc-400 font-medium">
                Name
              </th>
              <th className="text-left py-3 text-zinc-400 font-medium">
                
                Role
              </th>
              <th className="text-left py-3 text-zinc-400 font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-zinc-900 hover:bg-zinc-900/40 transition"
              >
                <td className="py-4">
                  <div>
                    <p className="text-white font-medium"> {user.name} </p>
                    <p className="text-zinc-400 text-sm"> {user.email} </p>
                  </div>
                </td>
                <td className="text-zinc-300"> {user.role} </td>{" "}
                <td>
                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300">
                    
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}