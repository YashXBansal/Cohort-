import React, { useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
};

function App() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user details from the API
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: User = await response.json();
        setUserInfo(data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserInfo();
  }, []); // Empty dependency array ensures this useEffect runs only once

  return (
    <div className="text-red-700 text-center pt-10 self-center text-fuchsia-700 justify-center">
      <h1>User Information</h1>
      {userInfo ? (
        <div>
          <p>
            <strong>Name:</strong> {userInfo?.name}
          </p>
          <p>
            <strong>Email:</strong> {userInfo?.email}
          </p>
        </div>
      ) : (
        <p>Loading user information...</p>
      )}
    </div>
  );
}

export default App;
