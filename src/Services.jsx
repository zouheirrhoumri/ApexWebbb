import { Link, useParams } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { adminChecker, tokenChecker } from "./utils/checker";

export default function Services() {
  const { id } = useParams();

  const [service, setService] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useLayoutEffect(() => {
    if (!tokenChecker()) return;
    setAuthenticated(true);
    if (adminChecker()) setIsAdmin(true);
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    await axios.get("http://127.0.0.1:8000/api/services").then(({ data }) => {
      console.log(data);
      setService(data.services);
    });
  };

  const deleteService = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/services/${id}`);
    try {
      await axios.delete(`http://127.0.0.1:8000/api/services/${id}`);
      fetchServices();
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  };

  return (
    <>
      <Header />

      <div className="container mt-6 mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-20">
          <h1 className="text-4xl font-bold text-center">Services</h1>
          <p className="text-center text-lg mt-4">
            Our services are designed to help you succeed.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {service.map((service) => (
            <div
              key={service.id}
              className="bg-n-7 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20 shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <h2 className="text-2xl font-bold text-white">{service.name}</h2>
              <p className="mt-4 text-white">{service.description}</p>
              <div className="flex space-x-4 mt-6">
                {authenticated && (
                  <Link
                    to="/quote"
                    className="inline-block bg-white text-n-7 px-6 py-3 rounded-lg"
                  >
                    Reserve
                  </Link>
                )}
                {isAdmin && (
                  <Link
                    to={`/editService/${service.id}`}
                    className="inline-block bg-white text-n-7 px-6 py-3 rounded-lg"
                  >
                    Edit
                  </Link>
                )}
                {isAdmin && (
                  <button
                    onClick={() => deleteService(service.id)}
                    className="inline-block bg-red-500 text-white px-6 py-3 rounded-lg"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-16">
        <Link
          to="/ServiceForm"
          className="bg-n-7 text-white px-6 py-3 rounded-lg"
        >
          Add a service
        </Link>
      </div>
      <Footer />
    </>
  );
}
