import { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("register success");
      window.location.href = "/blog";
    } else {
      alert("registration failed");
    }
  }

  return (
    <div className="flex justify-center items-center mt-5">
    <form className="block text-center" onSubmit={register}>
      <h1 className="font-bold mb-10 text-3xl text-gray-500">Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(ev) => setUsername(ev.target.value)}
        className="w-full mb-2 px-3 py-2 border rounded-lg"
      />
      <input     
        type="password"
        placeholder="password"
        value={password}
        onChange={(ev) => setPassword(ev.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded-lg items-center"
      />
      <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" > Sign Up</button>
    </form>
    </div>
  );
};

export default RegisterPage;
