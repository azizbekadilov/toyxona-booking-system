import { useState, useEffect } from "react";

function AdminPanel() {

  const [name, setName] = useState("");
  const [district, setDistrict] = useState("");
  const [capacity, setCapacity] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const [search, setSearch] = useState("");

  const [halls, setHalls] = useState(() => {
    const saved = localStorage.getItem("halls");
    return saved ? JSON.parse(saved) : [
      { id: "1", name: "Grand Saroy", district: "Chilonzor", capacity: 300 },
      { id: "2", name: "Osiyo To'yxonasi", district: "Yunusobod", capacity: 250 }
    ];
  });

  useEffect(() => {
    localStorage.setItem("halls", JSON.stringify(halls));
  }, [halls]);

  const handleAdd = () => {
    if (!name || !district || !capacity) return;

    setHalls([
      ...halls,
      {
        id: Date.now().toString(),
        name,
        district,
        capacity
      }
    ]);

    setName("");
    setDistrict("");
    setCapacity("");
  };

  const handleDelete = (index) => {
    setHalls(halls.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const h = halls[index];
    setName(h.name);
    setDistrict(h.district);
    setCapacity(h.capacity);
    setEditingIndex(index);
  };

  const handleSave = () => {
    const updated = [...halls];
    updated[editingIndex] = {
      ...updated[editingIndex],
      name,
      district,
      capacity
    };
    setHalls(updated);
    setEditingIndex(null);
    setName("");
    setDistrict("");
    setCapacity("");
  };

  // 🔍 SEARCH FILTER
  const filteredHalls = halls.filter((hall) =>
    hall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Owner Panel
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Toyxona qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <div className="bg-white shadow-lg rounded-xl p-6 mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Toyxona qo'shish
        </h2>

        <div className="grid md:grid-cols-3 gap-3">

          <input
            className="border p-2 rounded"
            placeholder="Nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Rayon"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />

          <input
            className="border p-2 rounded"
            placeholder="Sig'im"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />

        </div>

        <button
          onClick={editingIndex === null ? handleAdd : handleSave}
          className={`mt-4 px-5 py-2 rounded text-white ${
            editingIndex === null
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {editingIndex === null ? "Qo'shish" : "Saqlash"}
        </button>

      </div>

      <div className="bg-white shadow-lg rounded-xl overflow-hidden">

        <table className="w-full text-center">

          <thead className="bg-gray-900 text-white">

            <tr>
              <th className="p-3">Nomi</th>
              <th className="p-3">Rayon</th>
              <th className="p-3">Sig'im</th>
              <th className="p-3">Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredHalls.map((hall, index) => (

              <tr key={hall.id} className="border-b hover:bg-gray-50">

                <td className="p-3">{hall.name}</td>
                <td className="p-3">{hall.district}</td>
                <td className="p-3">{hall.capacity}</td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
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

    </div>
  );
}

export default AdminPanel;