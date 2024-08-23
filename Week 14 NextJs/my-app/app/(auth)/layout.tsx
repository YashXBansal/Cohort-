import React from "react";

export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-400 via-yellow-500 to-grey-500 text-blue font-bold p-4 rounded-md shadow-md text-center">
        20% off for a limited period
      </div>
      {children}
    </div>
  );
}
