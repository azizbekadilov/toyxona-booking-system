import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  return (

    <div className="bg-gray-900 text-white p-4 flex justify-between">

      <h1 className="font-bold">Toyxona App</h1>

      <div className="space-x-4">

        {/* USER */}
        {user?.role === "user" && (
          <>
            <Link to="/">Home</Link>
            <Link to="/owner">Owner Panel</Link>
          </>
        )}

        {/* ADMIN */}
        {user?.role === "admin" && (
          <>
            <Link to="/admin">Admin Panel</Link>
            <Link to="/owner">Owner Panel</Link>
          </>
        )}

        {/* LOGOUT */}
        <button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Navbar;