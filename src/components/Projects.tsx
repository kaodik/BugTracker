import React from "react";

export default function Projects() {
  return (
    <div className="w-96 text-blue-500 rounded-2xl bg-gray-500 p-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-lx pb-2">Projects</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
      <div className="border-2 rounded border-gray-400 bg-gray-50 h-20 text-base p-2">
        New project
      </div>
    </div>
  );
}
