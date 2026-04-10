import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const [halls, setHalls] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
  let data = JSON.parse(localStorage.getItem("halls"));

  if (!data || data.length === 0) {
    data = [
      {
        id: "1",
        name: "Grand Saroy",
        district: "Chilonzor",
        capacity: 300,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
      },
      {
        id: "2",
        name: "Osiyo To'yxonasi",
        district: "Yunusobod",
        capacity: 250,
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
      }
    ];

    localStorage.setItem("halls", JSON.stringify(data));
  }

  setHalls(data);
}, []);

  const filteredHalls = halls.filter((hall) =>
    hall.name.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold text-center mb-6">
        To'yxonalar
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Toyxona qidirish..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 w-full mb-8 rounded"
      />

      <div className="grid md:grid-cols-3 gap-8">

        {filteredHalls.map((hall) => (

          <Link key={hall.id} to={`/hall/${hall.id}`}>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">

              <img
                src={hall.image}
                alt="hall"
                className="w-full h-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold mb-2">
                  {hall.name}
                </h2>

                <p className="text-gray-600">
                  📍 {hall.district}
                </p>

                <p className="text-gray-600">
                  👥 {hall.capacity} kishi
                </p>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </div>

  );

}

export default Home;