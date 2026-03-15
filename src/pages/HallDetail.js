import { useState } from "react";

function HallDetail() {

  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");

  const hall = {
    name: "Grand Saroy",
    district: "Chilonzor",
    capacity: 300,
    price: 100000,
    phone: "+998901234567"
  };

  const handleBooking = (e) => {

    e.preventDefault();

    if (!selectedDate) {
      setMessage("Iltimos avval sana tanlang");
      return;
    }

    setMessage("Booking muvaffaqiyatli yuborildi");

    setName("");
    setPhone("");
    setGuests("");
  };

  return (

    <div className="max-w-4xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-4">
        {hall.name}
      </h1>

      <img
        src="https://picsum.photos/800/400"
        alt="hall"
        className="rounded-lg mb-4"
      />

      <div className="space-y-2 mb-6">
        <p>Rayon: {hall.district}</p>
        <p>Sig‘imi: {hall.capacity}</p>
        <p>Narxi: {hall.price} so'm</p>
        <p>Telefon: {hall.phone}</p>
      </div>

      <h2 className="text-2xl font-semibold mb-3">
        Bo'sh kun tanlang
      </h2>

      <div className="flex gap-3 flex-wrap mb-6">

        {[
          "2026-03-20",
          "2026-03-21",
          "2026-03-22",
          "2026-03-23",
          "2026-03-24"
        ].map((date) => (

          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            {date}
          </button>

        ))}

      </div>

      {selectedDate && (

        <div className="bg-green-100 p-3 rounded mb-6">
          Tanlangan sana: <b>{selectedDate}</b>
        </div>

      )}

      <h2 className="text-2xl font-semibold mb-4">
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

        <div className="bg-blue-100 p-3 mt-4 rounded">
          {message}
        </div>

      )}

    </div>

  );

}

export default HallDetail;