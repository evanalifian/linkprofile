import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-auto text-sm">
      <div className="max-w-xl mx-auto flex flex-col gap-y-2 p-4">
        <p>
          If you need something from me, you can email me on{" "}
          <a
            href="mailto:evanalifian@gmail.com"
            className="text-blue-700 font-medium dark:text-blue-500"
          >
            evanalifian@gmail.com
          </a>
        </p>
        <span className="dark:text-zinc-300">&copy; 2024 evanalifian</span>
      </div>
    </footer>
  );
}
