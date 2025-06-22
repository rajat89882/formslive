import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Forms from "./pages/dashboard/Forms";
import Templates from "./pages/dashboard/Templates";
import Reports from "./pages/dashboard/Reports";
import Snippets from "./pages/dashboard/Snippets";
import Users from "./pages/dashboard/Users";
import Connections from "./pages/dashboard/Connections";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forms" element={<Forms />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/snippets" element={<Snippets />} />
        <Route path="/users" element={<Users />} />
        <Route path="/connections" element={<Connections />} />
      </Routes>
    </Router>
  );
}

export default App;
