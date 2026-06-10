import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface NavbarProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ setSidebarOpen }: NavbarProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header className="h-16 border-b border-border bg-background flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-foreground"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
        <h2 className="text-foreground text-xl font-semibold">Dashboard</h2>
      </div>

      <div className="flex items-center gap-4">
        {mounted && (
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-lg bg-muted text-foreground hover:bg-accent transition"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}

        <div className="w-10 h-10 rounded-full bg-purple-500" />
      </div>
    </header>
  );
}
