  import { useState } from "react";
  
  
  export function banUser({user}) {
  const [banned, setBanned] = useState(false);
  const [bannedLoading, setBannedLoading] = useState(false);
  const handleUserBan = async () => {
    setBannedLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/user/ban?user=${user}&reason=...`,
        {
          method: "PUT",
          headers: {
            "api-key": "RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Error al banear usuario");
      }

      const data = await response.json();
      if (data.succes) {
        return setBanned(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setBannedLoading(false);
    }
  };

    return { banned, bannedLoading, handleUserBan };

}
