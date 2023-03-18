import { useData } from "../hooks/useData";
import { Box, Progress } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function useIsAdmin() {
  const { user_info, error, loading } = useData();
  const navigate = useNavigate();

  if (loading) {
    return false;
  }

  const whitelistRole = ["Admin", "Moderator"];
  const userRole = user_info.rol;
  if (!whitelistRole.includes(userRole)) {
    navigate("/error");
  }



}
