import { useState } from "react";

function AdminPanel() {

  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [capacity, setCapacity] = useState("");

  const [halls, setHalls] = useState([
    { id: 1, name: "Grand Saroy", district: "Chilonzor", capacity: 300 },
    { id: 2, name: "Osiyo To'yxonasi", district: "Yunusobod", capacity: 250 }
  ]);

  const addHall = (e) => {
    e.preventDefault();

    const newHall = {
      id: Date.now(),
      name,
      district,
      capacity
    };

    setHalls([...halls, newHall]);

    setName("");
    setDistrict("");
    setCapacity("");
  };

  const deleteHall = (id) => {
    setHalls(halls.filter(h => h.id !== id));
  };

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      <form onSubmit={addHall} className="space-y-3 mb-8">

        <h2 className="text-xl font-semibold">
          Toyxona qo'shish
        </h2>

        <input
          type="text"
          placeholder="Toyxona nomi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="text"
          placeholder="Rayon"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <input
          type="number"
          placeholder="Sig'im"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Qo'shish
        </button>

      </form>

      <table className="w-full border shadow rounded-lg overflow-hidden">

        <thead className="bg-gray-800 text-white">

          <tr>
            <th className="p-3">Nomi</th>
            <th className="p-3">Rayon</th>
            <th className="p-3">Sig'im</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {halls.map((hall) => (

            <tr key={hall.id} className="border-b text-center">

              <td className="p-3">{hall.name}</td>
              <td className="p-3">{hall.district}</td>
              <td className="p-3">{hall.capacity}</td>

              <td className="p-3">

                <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">
                  Edit
                </button>

                <button
                  onClick={() => deleteHall(hall.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AdminPanel;