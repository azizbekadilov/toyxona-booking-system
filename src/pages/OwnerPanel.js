import { useState } from "react";

function OwnerPanel() {

  const [search, setSearch] = useState("");

  const bookings = [
    {
      id: 1,
      name: "Ali",
      phone: "901111111",
      guests: 150,
      date: "2026-04-10",
      status: "pending"
    },
    {
      id: 2,
      name: "Vali",
      phone: "902222222",
      guests: 200,
      date: "2026-05-12",
      status: "approved"
    }
  ];

  const filtered = bookings.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Owner Booking Panel
      </h1>

      <input
        type="text"
        placeholder="Search booking..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full rounded"
      />

      <table className="w-full border shadow-lg rounded-lg overflow-hidden">

        <thead className="bg-blue-600 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Guests</th>
            <th className="p-3">Date</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {filtered.map((b) => (

            <tr key={b.id} className="border-b text-center">

              <td className="p-3">{b.name}</td>
              <td className="p-3">{b.phone}</td>
              <td className="p-3">{b.guests}</td>
              <td className="p-3">{b.date}</td>
              <td className="p-3">{b.status}</td>

              <td className="p-3">

                <button className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">
                  Approve
                </button>

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                  Reject
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default OwnerPanel;