import { useEffect, useState } from "react";
import { getToken, clearToken } from "../lib/auth";

export function useAuth() {
  const [jwt, setJwt] = useState<string | null>(null);

  useEffect(() => {
    setJwt(getToken());
  }, []);

  function logout() {
    clearToken();
    setJwt(null);
  }

  return { jwt, setJwt, logout };
}
