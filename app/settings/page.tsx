export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Settings</h1>

      <p className="text-muted-foreground mt-2 mb-8">
        Manage your account preferences and application settings.
      </p>

      <div className="bg-card border border-border rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-6">General Settings</h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Company Name</label>

            <input
              type="text"
              placeholder="PulseBoard Inc."
              className="
                w-full
                bg-muted
                border
                border-border
                rounded-xl
                px-4
                py-2
                outline-none
              "
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Notifications</label>

            <select
              className="
                w-full
                bg-muted
                border
                border-border
                rounded-xl
                px-4
                py-2
              "
            >
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>

          <button
            className="
              bg-purple-600
              hover:bg-purple-700
              text-white
              px-5
              py-2
              rounded-xl
              transition
            "
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
