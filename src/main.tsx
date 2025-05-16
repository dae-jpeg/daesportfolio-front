import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();
import Home from "./components/home.tsx";

const basename = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/admin" element={<AdminDashboard />} />
  </Routes>
</BrowserRouter>