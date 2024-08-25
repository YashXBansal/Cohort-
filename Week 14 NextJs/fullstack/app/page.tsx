// "use client";
import React from "react";
import axios from "axios";

type Address = {
  houseNumber: string;
  city: string;
  state: string;
};

type User = {
  userName: string;
  email: string;
  address: Address;
};

async function getUserDetails() {
  const res = await axios.get("http://localhost:3000/api/user");
  return res.data;
}

// Async component
async function Page() {
  const userDetails: User = await getUserDetails();

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-800">
      <div className="bg-gray-300 shadow-lg rounded-lg p-6 max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          User Information
        </h1>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Username:</span>{" "}
          {userDetails.userName}
        </p>
      </div>
    </div>
  );
}

export default Page;
