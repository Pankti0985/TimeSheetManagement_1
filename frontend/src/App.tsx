import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("Checking connection...");

  useEffect(() => {
    axios
      .get("http://localhost:3000/health")
      .then((res) => {
        setStatus(res.data.message);
      })
      .catch(() => {
        setStatus("Backend or Database not connected");
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Full Stack Connection
        </h1>

        <p className="text-lg text-green-600 font-semibold">
          {status}
        </p>

        <p className="text-sm text-gray-500 mt-4">
          React + Tailwind + NestJS + PostgreSQL
        </p>
      </div>
    </div>
  );
}

export default App;
