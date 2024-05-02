import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Products from "./Products.jsx";
import Services from "./Services.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ServiceForm from "./ServiceForm.jsx";
import EditService from "./EditService.jsx";
import Register from "./Register.jsx";
import Login from "./Login.jsx";
import Statistics from "./Statistics.jsx";
import { adminChecker, tokenChecker } from "./utils/checker.js";
import Quote from "./Quote.jsx";
import Blog from './Blog.jsx'
import BlogPost from './BlogPost.jsx'
const isAdmin = adminChecker();
const isAuthenticated = tokenChecker();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ServiceForm" element={<ServiceForm />} />
        {isAdmin && isAuthenticated && (
          <Route path="/editService/:id" element={<EditService />} />
        )}
        {!isAuthenticated && <Route path="/login" element={<Login />} />}
        {!isAuthenticated && <Route path="/register" element={<Register />} />}
        {isAuthenticated && <Route path="/quote" element={<Quote />} />}
        {/* <Route path="/blog" element={<Blog />} /> */}
        {isAdmin && isAuthenticated && (
          <Route path="/statistics" element={<Statistics />} />
        )}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />


      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);
