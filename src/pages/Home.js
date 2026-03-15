import { Link } from "react-router-dom";

function Home() {

  const halls = [
    {
      id: 1,
      name: "Grand Saroy",
      district: "Chilonzor",
      capacity: 300,
      image: "https://picsum.photos/400/250"
    },
    {
      id: 2,
      name: "Osiyo To'yxonasi",
      district: "Yunusobod",
      capacity: 250,
      image: "https://picsum.photos/401/250"
    },
    {
      id: 3,
      name: "Baxt Saroyi",
      district: "Mirzo Ulug'bek",
      capacity: 200,
      image: "https://picsum.photos/402/250"
    }
  ];

  return (

    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Toyxonalar ro'yxati
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {halls.map((hall) => (

          <div
            key={hall.id}
            className="border rounded-lg shadow hover:shadow-lg"
          >

            <img
              src={hall.image}
              alt="hall"
              className="rounded-t-lg"
            />

            <div className="p-4">

              <h2 className="text-xl font-semibold mb-2">
                {hall.name}
              </h2>

              <p>Rayon: {hall.district}</p>
              <p>Sig'imi: {hall.capacity}</p>

              <Link
                to="/hall"
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Batafsil
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Home;