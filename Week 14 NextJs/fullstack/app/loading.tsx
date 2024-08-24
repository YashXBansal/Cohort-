import React from "react";

export default function LoadingScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-white"></div>
        <p className="text-white text-xl font-semibold mt-4">Loading...</p>
      </div>
    </div>
  );
}
