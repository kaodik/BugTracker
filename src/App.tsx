import React from "react";
import { Sidemenu } from "./components/Sidemenu";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";
export default function App() {
  return (
    <div className="bg-gray-400 min-h-full">
      <Menu />
      <Sidemenu />
    </div>
  );
}
