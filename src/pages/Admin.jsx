import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import {
  Box,
  Progress,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useIsAdmin } from "../utilities/isAdmin";
import { Navbar } from "../components/Navbar";
import { useUsers } from "../hooks/useUsers";

const Admin = () => {
  const { user_info, error, loading } = useData();
  const { cargando, users } = useUsers();
  const navigate = useNavigate();
  useIsAdmin();

  useEffect(() => {
    const logged = localStorage.getItem("token");
    if (!logged) {
      navigate("/login");
    }
    document.title = "Admin";
  }, []);

  if (loading) return <Progress size="xs" isIndeterminate />;
  if (cargando) return <Progress size="xs" isIndeterminate />;
  return (
    <>
      <main className="bg-blue-600 font-medium">
        <Navbar user={user_info.name} />
      </main>
    </>
  );
};

export default Admin;
