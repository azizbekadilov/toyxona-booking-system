import { Link } from "react-router-dom";

function Navbar() {

  return (

    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow">

      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-2xl font-bold">
          Toyxona Booking
        </h1>

        <div className="space-x-6">

          <Link
            to="/"
            className="hover:text-gray-200"
          >
            Home
          </Link>

          <Link
            to="/hall"
            className="hover:text-gray-200"
          >
            Hall
          </Link>

          <Link
            to="/admin"
            className="hover:text-gray-200"
          >
            Admin
          </Link>

          <Link
            to="/owner"
            className="hover:text-gray-200"
          >
            Owner
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Navbar;