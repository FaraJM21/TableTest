import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Posts from "./pages/posts";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/:num" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
