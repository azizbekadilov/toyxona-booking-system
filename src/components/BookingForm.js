import { useState } from "react";
import API from "../services/api";

function BookingForm({ selectedDate }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/bookings", {
        name,
        phone,
        guests,
        date: selectedDate
      });

      setSuccess(true);

      setName("");
      setPhone("");
      setGuests("");

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      {success && (

        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded">
          Booking muvaffaqiyatli yuborildi!
        </div>

      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <h2 className="text-xl font-semibold">
          Bron qilish
        </h2>

        <input
          type="text"
          placeholder="Ismingiz"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="text"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <input
          type="number"
          placeholder="Necha kishi"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Bron qilish
        </button>

      </form>

    </div>

  );

}

export default BookingForm;