import React from "react";

export default function BugStatus() {
  return (
    <div className="w-96 text-blue-500 rounded-2xl bg-gray-500 p-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-lx pb-2">BugStatus</h2>
      </div>
      <div className="border-2 rounded border-gray-400 bg-gray-50 h-20 text-center">
        <table className="w-full">
          <thead className="text-lg bg-gray-200 p-40">
            <th>
              <button>Subject</button>
            </th>
            <th>
              <button>Status</button>
            </th>
            <th>
              <button>Due</button>
            </th>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td>Navbar bug</td>
              <td>open</td>
              <td>05/12/21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
