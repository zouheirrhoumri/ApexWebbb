
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Axios } from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';


export default function Services() {

  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <>
      <Header />

      <div className="container mt-6 mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-center">Services</h1>
          <p className="text-center text-lg mt-4">Our services are designed to help you succeed.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* {services.map(service => (
            <div key={service.id} className="bg-n-7 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20 shadow-lg transform hover:scale-105 transition-transform duration-200">
              <h2 className="text-2xl font-bold text-white">{service.title}</h2>
              <p className="mt-4 text-white">{service.description}</p>
              <Link to="/quote" className="mt-6 inline-block bg-white text-n-7 px-6 py-3 rounded-lg">Reserve</Link>
            </div>
          ))} */}
          <div className="bg-n-7 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-150 h-full ">
            <h2 className="text-2xl font-bold">Web Development</h2>
            <p className="mt-4">We build websites that are fast, secure, and easy to manage.</p>
            <Link to="/ServiceForm" className="mt-24 inline-block bg-white text-n-7 px-6 py-3 rounded-lg self-end">Reserve</Link>
            <Link to="/editService" className="mt-24 ml-12 inline-block bg-white text-n-7 px-6 py-3 rounded-lg self-end">edit</Link>

          </div>
          <div className="bg-n-7 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-bold">Mobile Development</h2>
            <p className="mt-4">We create mobile apps that are user-friendly and accessible.</p>
          </div>
          <div className="bg-n-7 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20 shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h2 className="text-2xl font-bold">SEO</h2>
            <p className="mt-4">We help you rank higher on search engines and drive more traffic to your website.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-16">
        <Link to="/contact" className="bg-n-7 text-white px-6 py-3 rounded-lg">Contact Us</Link>
      </div>
      <Footer />
    </>
  )
}