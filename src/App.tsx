import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import ProjectsPage from "./pages/Projects.tsx";
import Academics from "./pages/Academics.tsx";
import Hobbies from "./pages/Hobbies.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize theme from localStorage (default dark)
    const stored = localStorage.getItem("theme");
    const theme = stored === "light" ? "light" : "dark";
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);

    // Copy protection: disable right-click
    const onContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", onContextMenu);

    // Copy protection: disable common save/copy/select-all shortcuts
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["s", "u", "c", "a"].includes(e.key.toLowerCase())) {
        const target = e.target as HTMLElement | null;
        const tag = target?.tagName;
        // Allow copy/select-all inside form fields
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/hobbies" element={<Hobbies />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <div className="copyright-watermark">© Anushna Patra 2025. All rights reserved.</div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
