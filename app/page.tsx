"use client";
import React, { useState } from "react";

// Simple animation replacement (since framer-motion removed)
const MotionH2 = ({ children }) => <h2 style={{transition:"all 0.5s"}}>{children}</h2>;
// Simple components (no external dependency)
const Card = ({ children }) => <div style={{border:'1px solid #ddd',padding:'16px',borderRadius:'10px',background:'#fff'}}>{children}</div>;
const CardContent = ({ children }) => <div>{children}</div>;
const Button = ({ children, ...props }) => <button {...props} style={{padding:'10px',background:'#5a3e1b',color:'#fff',border:'none',borderRadius:'6px',cursor:'pointer'}}>{children}</button>;
const Input = (props) => <input {...props} style={{padding:'10px',width:'100%',marginTop:'8px'}} />;
const Textarea = (props) => <textarea {...props} style={{padding:'10px',width:'100%',marginTop:'8px'}} />;


export default function Website() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0ADetails: ${form.message}`;
    window.open(`https://wa.me/917200205584?text=${text}`);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8f5f0", color: "#333" }}>

      {/* Header (Logo Removed) */}
      <header style={{ background: "#3b2a1a", color: "#fff", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="text-xl font-bold">Best Enterprises</h1>
        <div className="space-x-4">
          <a href="#services">Services</a>
          <a href="#forms">Enquiry</a>
          <a href="#contact">Contact</a>
        </div>
      </header>

      {/* Hero */}
      <section className="p-24 text-center">
        <MotionH2>
          Advertisement + Manpower Supply
        </MotionH2>
        <p className="mb-6">Reach thousands daily through tea cups & get reliable manpower solutions.</p>
        <a href="https://wa.me/917200205584">
          <Button className="bg-green-600 text-white">WhatsApp Now</Button>
        </a>
      </section>

      {/* Services */}
      <section id="services" className="p-10 grid md:grid-cols-2 gap-6">
        <Card className="border-[#c8a165]">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#5a3e1b]">Manpower Supply</h3>
            <p>Skilled & unskilled labour for construction, factories & EPC projects.</p>
          </CardContent>
        </Card>

        <Card className="border-[#c8a165]">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#5a3e1b]">Tea Cup Advertising</h3>
            <p>Advertise on tea cups across Chennai tea stalls with high daily visibility.</p>
          </CardContent>
        </Card>
      </section>

      {/* Forms */}
      <section id="forms" className="p-10 grid md:grid-cols-2 gap-6">

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Advertiser Booking</h3>
            <Input name="name" placeholder="Company Name" onChange={handleChange} />
            <Input name="phone" placeholder="Phone" className="mt-2" onChange={handleChange} />
            <Textarea name="message" placeholder="Campaign Details" className="mt-2" onChange={handleChange} />
            <Button className="mt-4 w-full bg-[#5a3e1b]" onClick={sendToWhatsApp}>Send via WhatsApp</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">Manpower Enquiry</h3>
            <Input name="name" placeholder="Company Name" onChange={handleChange} />
            <Input name="phone" placeholder="Phone" className="mt-2" onChange={handleChange} />
            <Textarea name="message" placeholder="Worker Requirement" className="mt-2" onChange={handleChange} />
            <Button className="mt-4 w-full bg-[#5a3e1b]" onClick={sendToWhatsApp}>Send via WhatsApp</Button>
          </CardContent>
        </Card>

      </section>

      {/* Contact */}
      <section id="contact" className="p-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p>Phone: +91 7200205584</p>
        
        <p>Location: Sriperumbudur</p>
      </section>

      {/* Footer */}
      <footer className="bg-[#3b2a1a] text-white text-center p-4">
        © 2026 Best Enterprises
      </footer>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/917200205584" className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg">
        Chat
      </a>

    </div>
  );
}