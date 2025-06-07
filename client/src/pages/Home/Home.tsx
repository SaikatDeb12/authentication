// pages/HomePage.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken } from "../../services/auth";

const HomePage: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProtected = async () => {
      try {
        const token = getToken();
        const res = await axios.get("http://localhost:5000/api/home", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMessage(res.data.msg);
      } catch (err) {
        setMessage("Unauthorized or error occurred.", err);
      }
    };

    fetchProtected();
  }, []);

  return <div>{message ? <h1>{message}</h1> : <p>Loading...</p>}</div>;
};

export default HomePage;
