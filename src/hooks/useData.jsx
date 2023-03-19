import { useEffect, useState } from "react";

export function useData() {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [user_info, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (token) {
          const response = await fetch(`http://localhost:3000/user`, {
            method: "GET",
            headers: {
              token: token,
              "api-key": "RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ",
            },
          });

          if (!response.ok) {
            throw new Error(response.status);
          }

          const data = await response.json();

          setUserInfo({
            name: data.name,
            token: data.token,
            ip: data.ip,
            date: data.date,
            alias: data.alias,
            rol: data.rol,
            block: data.block,
          });
        }
      } catch (error) {
        window.location.href = "/login";
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  return { loading, error, user_info };
}
