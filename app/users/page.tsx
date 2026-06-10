"use client";
import { useState } from "react";
import UsersTable from "@/components/dashboard/UsersTable";
import AddUserModal from "@/components/dashboard/AddUserModal";
import { User } from "@/app/types/user";
import {users} from "@/app/data/users";

export default function UsersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usersList, setUsersList] = useState<User[]>(users);

  const totalUsers = usersList.length;

const activeUsers = usersList.filter(
  (user) => user.status === "Active"
).length;

const pendingUsers = usersList.filter(
  (user) => user.status === "Pending"
).length;

  const handleAddUser = (userData: {
    name: string;
    email: string;
    role: string;
  }) => {
    const newUser: User = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      role: userData.role,
      status: "Active",
    };

    setUsersList((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Users</h1>

          <p className="text-zinc-400 mt-2">Manage all users here.</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl transition"
        >
          + Add User
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">Total Users</p>
          <h3 className="text-3xl font-bold text-white mt-2">{totalUsers}</h3>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">Active Users</p>
          <h3 className="text-3xl font-bold text-green-400 mt-2">
            {activeUsers}
          </h3>
        </div>

        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400 text-sm">Pending Users</p>
          <h3 className="text-3xl font-bold text-yellow-400 mt-2">
            {pendingUsers}
          </h3>
        </div>
      </div>

      <UsersTable users={usersList} />
      <AddUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddUser={handleAddUser}
      />
    </div>
  );
}
