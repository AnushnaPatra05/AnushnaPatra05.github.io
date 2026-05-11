import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/academics", label: "Academics" },
  { to: "/hobbies", label: "Hobbies" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => setOpen(false), [pathname]);

  const ThemeToggle = (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="grid place-items-center transition-smooth"
      style={{
        width: 36,
        height: 36,
        borderRadius: "9999px",
        backgroundColor: "rgba(255,255,255,0.08)",
        border: "0.5px solid rgba(255,255,255,0.12)",
        color: "hsl(var(--mint))",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
    >
      {theme === "dark" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 navbar-glass">
      <nav className="container-narrow flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-md border border-mint grid place-items-center font-bold tracking-tight gradient-text">
            AP
          </span>
          <span className="font-semibold text-foreground hidden sm:inline">Anushna Patra</span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-smooth hover:text-mint ${
                    isActive ? "text-mint" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="text-sm font-medium text-foreground/80 hover:text-mint transition-smooth"
            >
              Contact
            </a>
          </li>
          <li>{ThemeToggle}</li>
        </ul>

        <div className="lg:hidden flex items-center gap-2">
          {ThemeToggle}
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-background border-t border-subtle">
          <ul className="container-narrow py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block py-3 font-medium ${isActive ? "text-mint" : "text-foreground/80"}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a href={pathname === "/" ? "#contact" : "/#contact"} className="block py-3 text-foreground/80">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
