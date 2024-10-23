import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-auto">
      <div className="max-w-xl mx-auto p-4">
        <p>
          If you need something from me, you can email me on{" "}
          <a
            href="mailto:evanalifian@gmail.com"
            className="text-gray-700 transition-colors hover:text-gray-900"
          >
            evanalifian@gmail.com
          </a>
        </p>
        <span className="text-sm">&copy; 2024 evanalifian</span>
      </div>
    </footer>
  );
}
