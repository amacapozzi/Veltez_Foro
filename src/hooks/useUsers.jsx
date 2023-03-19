import { useEffect, useState } from "react";

export function useUsers() {
  const [users, setUsers] = useState("");
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    setCargando(true);
    fetch("http://localhost:3000/api/user/info", {
      headers: {
        "api-key": "RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data) && setCargando)
      .catch((error) => console.log("Ocurrio un error"))
      .finally(() => setCargando(false));
  }, []);

  return { users, cargando };
}
