import { useEffect, useState } from "react";

function OwnerPanel() {

  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const updateStatus = (index, status) => {
    const updated = [...bookings];
    updated[index].status = status;
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  // 🔍 SEARCH + FILTER
  const filteredBookings = bookings.filter((b) => {

    const matchSearch =
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search);

    const matchFilter =
      filter === "all" ? true : b.status === filter;

    return matchSearch && matchFilter;
  });

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Ism yoki telefon orqali qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 w-full mb-4 rounded"
      />

      {/* FILTER */}
      <div className="mb-4 space-x-2">

        <button onClick={() => setFilter("all")} className="bg-gray-300 px-3 py-1 rounded">
          All
        </button>

        <button onClick={() => setFilter("pending")} className="bg-yellow-400 px-3 py-1 rounded">
          Pending
        </button>

        <button onClick={() => setFilter("approved")} className="bg-green-500 text-white px-3 py-1 rounded">
          Approved
        </button>

        <button onClick={() => setFilter("rejected")} className="bg-red-500 text-white px-3 py-1 rounded">
          Rejected
        </button>

      </div>

      <div className="bg-white shadow rounded overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-800 text-white">

            <tr>
              <th className="p-3">User</th>
              <th className="p-3">Ism</th>
              <th className="p-3">Telefon</th>
              <th className="p-3">Mehmonlar</th>
              <th className="p-3">Sana</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredBookings.map((b, index) => (

              <tr key={index} className="text-center border-b">
                <td className="p-3">{b.createdBy}</td>

                <td className="p-3">{b.name}</td>
                <td className="p-3">{b.phone}</td>
                <td className="p-3">{b.guests}</td>
                <td className="p-3">{b.date}</td>

                <td className="p-3">
                  {b.status === "pending" && <span className="bg-yellow-300 px-2 py-1 rounded">Pending</span>}
                  {b.status === "approved" && <span className="bg-green-400 px-2 py-1 rounded text-white">Approved</span>}
                  {b.status === "rejected" && <span className="bg-red-400 px-2 py-1 rounded text-white">Rejected</span>}
                </td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={() => updateStatus(index, "approved")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(index, "rejected")}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Reject
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}

export default OwnerPanel;