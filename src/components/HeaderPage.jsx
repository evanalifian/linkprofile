import { ChevronRight, Github, MoonStar, Sun } from "lucide-react";
import { useState } from "react";

export default function HeaderPage() {
  const [isDark, setIsDark] = useState(false);
  const html = document.getElementsByTagName("html")[0];
  
  function handleDarkTheme() {
    html.classList.toggle("dark");
    setIsDark(!isDark);
  }

  return (
    <header className="sticky top-0 p-4 border-b border-zinc-300 backdrop-blur-lg bg-white/50 dark:bg-black/50 dark:border-zinc-700">
      <nav className="max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="font-medium dark:text-white">cnsl.lg</span>
          <ChevronRight size={16} className="dark:stroke-white" />
          <a
            href="/"
            className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            evanalifian profile
          </a>
        </div>
        <div className="flex items-center gap-x-4">
          <button type="button" onClick={handleDarkTheme}>
            {isDark ? (
              <MoonStar
                size={22}
                className="transition-colors dark:stroke-gray-300 dark:hover:stroke-gray-100"
              />
            ) : (
              <Sun
                size={22}
                className="stroke-gray-700 transition-colors hover:stroke-gray-900"
              />
            )}
          </button>
          <a
            href="https://github.com/evanalifian/linkprofile"
            target="_blank"
            className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
          >
            <Github size={22} />
          </a>
        </div>
      </nav>
    </header>
  );
}
