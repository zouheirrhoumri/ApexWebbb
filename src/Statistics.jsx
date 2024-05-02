import Header from "./components/Header";
import Footer from "./components/Footer";
import StatsCard from "./StatsCard";
import { useEffect, useLayoutEffect, useState } from "react";
import { adminChecker, tokenChecker } from "./utils/checker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReservationTable from "./components/RservationsTable";

export default function Statistics() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!tokenChecker()) return;
    if (!adminChecker()) navigate("/");
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    await axios.get("http://127.0.0.1:8000/api/stats").then(({ data }) => {
      console.log(data);
      setData(data.data);
    });
  };
  return (
    <>
      <Header />
      <main className="h-full bg-gray-900 py-20">
        {/* Stats Row */}
        <div className="flex justify-center  py-10 p-14">
          <StatsCard
            title="Services"
            total={data.usersCount}
            bgColor="bg-blue-500"
          />
          <StatsCard title="Services" total={data.servicesCount} bgColor="bg-purple-400" />
          <StatsCard
            title="Reservations"
            total={data.reservationsCount}
            bgColor="bg-purple-900"
          />
        </div>

        <ReservationTable reservations={data.reservations}/>
      </main>
      <Footer />
    </>
  );
}
