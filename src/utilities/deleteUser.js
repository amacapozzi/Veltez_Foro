import { useState } from "react";
import { TableAdmin } from "../components/TableAdmin";
import { useUsers } from "../hooks/useUsers";

export function deleteUser(id) {
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const { users } = useUsers();

  const handleDeleteUser = async (e) => {
    const response = await fetch(`http://localhost:3000/api/delete?id=${id}`, {
      method: "DELETE",
      headers: {
        "api-key": "RTD/=HFnaakw3J6AOmoT2WCZmvKMayZLKqvrZ",
      },
    });
    if (!response.ok) {
      return (
        setError(true) &&
        setTimeout(() => {
          setError(false);
        }, 3250)
      );
    }

    const data = await response.json();
    if (data.succes) {
      setSucces(true) &&
        setTimeout(() => {
          setSucces(false);
        }, 3250);
    }
  };

  return { error, succes, handleDeleteUser };
}
