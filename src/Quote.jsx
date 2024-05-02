import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUser, tokenChecker } from "./utils/checker";

export default function Quote() {
  const [description, setDescription] = useState("");
  let service_id = localStorage.getItem("serviceId");
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!service_id) navigate("/services");
    if (!tokenChecker()) navigate("/login");
  }, []);

  async function handleReservation(e) {
    e.preventDefault();
    service_id = JSON.parse(service_id);
    const user = getUser();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/reservations",
        {
          description,
          service_id,
          user_id: user.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data);
        navigate("/services");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold text-center">
              MAKE YOUR RESERVATION
            </h1>
            <p className="text-center text-lg mt-4">
              Fill out the form below to make a reservation.
            </p>
            <form
              className="w-full max-w-lg mt-8"
              onSubmit={(e) => {
                handleReservation(e);
              }}
            >
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                placeholder="Reservation Description"
              ></textarea>

              <Button
                className="bg-n-6 hover:bg-n-7 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
