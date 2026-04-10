import { useEffect, useState } from "react";

function MyBookings() {

  const [bookings, setBookings] = useState([]);

  const user =
    JSON.parse(localStorage.getItem("user"));

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const my = data.filter(
      (b) => b.createdBy === user?.username
    );

    setBookings(my);

  }, []);

  const handleCancel = (index) => {

    let all =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updated = all.filter(
      (b) => !(b.createdBy === user.username && b.date === bookings[index].date)
    );

    localStorage.setItem("bookings", JSON.stringify(updated));

    window.location.reload();
  };

  return (

    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-2xl font-bold mb-4">
        Mening bronlarim
      </h1>

      {bookings.map((b, i) => (

        <div key={i} className="border p-4 mb-3 rounded">

          <p>{b.hallName}</p>
          <p>{b.date}</p>
          <p>{b.status}</p>

          <button
            onClick={() => handleCancel(i)}
            className="bg-red-500 text-white px-3 py-1 rounded mt-2"
          >
            Bekor qilish
          </button>

        </div>

      ))}

    </div>
  );
}

export default MyBookings;