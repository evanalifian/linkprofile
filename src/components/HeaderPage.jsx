import { ChevronRight, Github } from "lucide-react";

export default function HeaderPage() {
  return (
    <header className="sticky top-0 p-4 border-b border-zinc-300 backdrop-blur-lg bg-white/50">
      <nav className="max-w-xl mx-auto flex justify-between">
        <div className="flex items-center gap-x-2">
          <span className="font-medium">cnsl.lg</span>
          <ChevronRight size={16} />
          <a
            href="/"
            className="text-gray-700 transition-colors hover:text-gray-900"
          >
            evanalifian profile
          </a>
        </div>
        <a
          href="https://github.com/evanalifian/linkprofile"
          target="_blank"
          className="inline-flex items-center gap-x-2 text-gray-700 transition-colors hover:text-gray-900"
        >
          <Github size={22} />
          <span className="hidden font-medium md:inline">See this repo</span>
        </a>
      </nav>
    </header>
  );
}
