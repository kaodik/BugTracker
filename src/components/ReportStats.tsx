import React from "react";

export default function ReportStats() {
  return (
    <div className="w-4/6 text-blue-500 rounded-2xl bg-blue-500 p-2">
      <div className="flex flex-row justify-between">
        <h2 className="text-lx pb-2 text-blue-200">ReportsStats</h2>
      </div>
      <div className="">
        <table className="text-left bg-blue-200 h-96 w-full rounded-xl ">
          <thead className="bg-blue-300">
            <th className="rounded-tl-xl pl-5">Category</th>
            <th>Closed</th>
            <th>Open</th>
            <th>In Progress</th>
            <th className="rounded-tr-xl">Resovle</th>
          </thead>
          <tbody>
            <tr>
              <td className="pl-5">Database</td>
              <td>9</td>
              <td>20</td>
              <td>40</td>
              <td>3943</td>
            </tr>
            <tr>
              <td className="pl-5">Server</td>
              <td>6</td>
              <td>45</td>
              <td>34</td>
              <td>393</td>
            </tr>
            <tr>
              <td className="pl-5">Cloud</td>
              <td>563</td>
              <td>24</td>
              <td>556</td>
              <td>365</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
