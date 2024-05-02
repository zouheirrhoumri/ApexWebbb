import Table from "./Table";

export default function ReservationTable({ reservations = [] }) {
    // Define the table headers
    const headers = ["Service Name", "Description", "User Name", "Status"];
  
    if (!reservations || !Array.isArray(reservations)) {
      // Fallback UI when reservations data is unavailable
      return <div>No reservations data available.</div>;
    }
  
    // Extract relevant data for each reservation
    const tableData = reservations.map((reservation) => [
      reservation.service?.name || "",
      reservation.description || "",
      reservation.user?.name || "",
      "", // Empty status
    ]);
  
    return (
      <div className="flex justify-center py-10 p-5">
        <Table
          title="Reservation Table"
          headers={headers}
          data={tableData}
        />
      </div>
    );
  }
  