import React from "react";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center">
        <h2 className="text-xl font-semibold mb-4">Welcome, {user.email}!</h2>
        <button
          className="w-full bg-red-500 text-white p-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
