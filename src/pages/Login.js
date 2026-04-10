import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    let user;

    // ADMIN
    if (password === "1234") {
      user = { username, role: "admin" };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
      return;
    }

    // USER
    user = { username, role: "user" };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/");
  };

  return (

    <div className="flex items-center justify-center h-screen">

      <div className="bg-white p-6 rounded shadow w-80">

        <h2 className="text-xl mb-4 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (admin: 1234)"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>

  );
}

export default Login;