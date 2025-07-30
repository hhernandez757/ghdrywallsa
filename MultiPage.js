import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1>GH Drywall</h1>
      <nav style={{ margin: "20px" }}>
        <Link to="/services" style={{ marginRight: "15px" }}>Services</Link>
        <Link to="/about" style={{ marginRight: "15px" }}>Why Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}

function Services() {
  return <div><h2>Our Services</h2><p>Drywall, tape & float, texture, patchwork.</p></div>;
}

function WhyUs() {
  return <div><h2>Why Choose GH Drywall?</h2><p>Family-owned for 37 years.</p></div>;
}

function Contact() {
  return <div><h2>Contact</h2><p>Email: gilbertghd31@gmail.com</p></div>;
}

export default function MultiPage() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div><h2>Welcome to GH Drywall</h2></div>} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
