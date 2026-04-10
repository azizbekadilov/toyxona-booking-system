import { useState } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function HallDetail() {

  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const halls =
    JSON.parse(localStorage.getItem("halls")) || [];

  const hall = halls.find((h) => h.id === id);

  if (!hall) {
    return <h1>To'yxona topilmadi</h1>;
  }

  const handleBooking = (e) => {

    e.preventDefault();

    // ❗ sana tanlanmagan
    if (!selectedDate) {
      setMessage("Iltimos sana tanlang");
      return;
    }

    const today = new Date();
    today.setHours(0,0,0,0);

    // ❌ o‘tgan sana
    if (selectedDate < today) {
      setMessage("O‘tgan sanani tanlab bo‘lmaydi");
      return;
    }

    // ❌ capacity tekshiruv
    if (Number(guests) > Number(hall.capacity)) {
      setMessage(`Maksimal ${hall.capacity} kishi mumkin`);
      return;
    }

    const formattedDate = selectedDate.toISOString().split("T")[0];

    const oldBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // ❌ band sana tekshiruv
    const isBooked = oldBookings.find(
    (b) => b.date === formattedDate && b.hallName === hall.name
    );
    if (isBooked) {
      setMessage("Bu sana allaqachon band");
      return;
    }

    // ✅ yangi booking
    const user =
  JSON.parse(localStorage.getItem("user"));

const newBooking = {
  hallName: hall.name,
  name,
  phone,
  guests,
  date: formattedDate, // ✅ MUHIM
  status: "pending",
  createdBy: user?.username || "guest"
};

    localStorage.setItem(
      "bookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    setMessage("Booking muvaffaqiyatli yuborildi");

    setName("");
    setPhone("");
    setGuests("");
    setSelectedDate(null);
  };

  return (

    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-4">
        {hall.name}
      </h1>

      <img
        src={hall.image}
        alt={hall.name}
        className="rounded-lg mb-4"
      />

      <div className="space-y-2 mb-6">
        <p>Rayon: {hall.district}</p>
        <p>Sig‘imi: {hall.capacity}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">
        Sana tanlang
      </h2>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        className="border p-2 rounded w-full mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">
        Bron qilish
      </h2>

      <form onSubmit={handleBooking} className="space-y-3">

        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="text"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="number"
          placeholder="Necha kishi"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Bron qilish
        </button>

      </form>

      {message && (
        <div className="bg-yellow-100 p-3 mt-4 rounded">
          {message}
        </div>
      )}

    </div>

  );

}

export default HallDetail;