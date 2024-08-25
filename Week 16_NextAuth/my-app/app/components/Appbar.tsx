"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <header className="bg-blue-600 shadow-md py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-semibold cursor-pointer">
          MyApp
        </div>
        <nav className="flex items-center space-x-4">
          <button
            className="bg-transparent hover:bg-white text-white hover:text-blue-600 font-bold py-2 px-4 border border-white rounded transition duration-300"
            onClick={() => {
              signIn();
            }}
          >
            Sign In
          </button>
          <button
            className="bg-transparent hover:bg-white text-white hover:text-blue-600 font-bold py-2 px-4 border border-white rounded transition duration-300"
            onClick={() => {
              signOut();
            }}
          >
            Log Out
          </button>
        </nav>
      </div>
      {JSON.stringify(session)}
    </header>
  );
};
