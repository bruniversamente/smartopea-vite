const TOKEN_KEY = "smartopea.jwt";

export function saveToken(jwt: string) {
  localStorage.setItem(TOKEN_KEY, jwt);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function authHeader(): Record<string, string> {
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}
