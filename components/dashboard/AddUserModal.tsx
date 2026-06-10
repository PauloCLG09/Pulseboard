import { useState } from "react";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddUser: (user: { name: string; email: string; role: string }) => void;
}

export default function AddUserModal({
  isOpen,
  onClose,
  onAddUser,
}: AddUserModalProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Add New User</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="..."
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="..."
          />

          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="..."
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 text-white"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onAddUser({
                name,
                email,
                role,
              });

              setName("");
              setEmail("");
              setRole("");

              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-purple-600 text-white"
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
}
