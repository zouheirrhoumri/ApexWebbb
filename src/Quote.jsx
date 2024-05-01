import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Quote() {
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  async function handleReservation() {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/reservations",
        {
          description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        const data = response.data;
        console.log(data.status);
        localStorage.setItem("authToken", JSON.stringify(data.authorisation));
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
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
            <form className="w-full max-w-lg mt-8" onSubmit={handleReservation}>
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
