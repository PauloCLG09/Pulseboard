"use client"

import { useState } from "react";
import { User } from "@/app/types/user";

interface UsersTableProps {
  users: User[];
}

export default function UsersTable({ users }: UsersTableProps) {

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "All" ? true : user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-card border border-border rounded-2xl p-6 mt-8">
      <div className="mb-6">
        <h3 className="text-card-foreground text-xl font-semibold"> Users </h3>
        <p className="text-muted-foreground text-sm mt-1">
          Manage your team members and permissions
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:w-[300px] bg-muted border border-border rounded-xl px-4 py-2 text-foreground outline-none focus:border-purple-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-muted border border-border rounded-xl px-4 py-2 text-foreground outline-none focus:border-purple-500"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 text-muted-foreground font-medium">
                Name
              </th>
              <th className="text-left py-3 text-muted-foreground font-medium">
                Role
              </th>
              <th className="text-left py-3 text-muted-foreground font-medium">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-border hover:bg-accent transition"
              >
                <td className="py-4">
                  <div>
                    <p className="text-card-foreground font-medium">
                      {user.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {user.email}
                    </p>
                  </div>
                </td>
                <td className="text-foreground"> {user.role} </td>
                <td>
                  <span className="px-3 py-1 rounded-full text-xs bg-muted text-foreground">
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
