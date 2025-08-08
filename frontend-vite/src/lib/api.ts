import axios from "axios";
import { authHeader, saveToken } from "./auth";
import type { ApiList, ApiSingle, LoginResponse, Post, Portfolio, Processo } from "./types";

const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, "") || "http://localhost:1337";
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
});

// Attach auth header (JWT) when available
api.interceptors.request.use((cfg) => {
  cfg.headers = { ...(cfg.headers || {}), ...authHeader() };
  return cfg;
});

// ---- Public content ----
export async function getPosts(params: Record<string, any> = {}) {
  const { data } = await api.get<ApiList<Post>>("/posts", {
    params: { populate: "cover", sort: "publishedAt:desc", ...params },
  });
  return data.data;
}

export async function getPostBySlug(slug: string) {
  const { data } = await api.get<ApiList<Post>>("/posts", {
    params: { filters: { slug: { $eq: slug } }, populate: "cover" },
  });
  return data.data?.[0] || null;
}

export async function getCasos(params: Record<string, any> = {}) {
  const { data } = await api.get<ApiList<Portfolio>>("/portfolios", {
    params: { populate: "cover", sort: "createdAt:desc", ...params },
  });
  return data.data;
}

export async function getCasoBySlug(slug: string) {
  const { data } = await api.get<ApiList<Portfolio>>("/portfolios", {
    params: { filters: { slug: { $eq: slug } }, populate: "cover" },
  });
  return data.data?.[0] || null;
}

// ---- Forms (contato, cliente) ----
export async function createMensagem(payload: { nome: string; email: string; mensagem: string }) {
  const { data } = await api.post("/mensagems", { data: payload });
  return data.data;
}

export async function criarCliente(payload: { nome: string; email: string; telefone?: string }) {
  const { data } = await api.post("/comentarios", { data: payload });
  return data.data;
}

// ---- Auth ----
export async function login(email: string, password: string) {
  const { data } = await axios.post<LoginResponse>(`${API_URL}/api/auth/local`, {
    identifier: email,
    password,
  });
  saveToken(data.jwt);
  return data;
}

// ---- Painel / Processos ----
export async function getMeusProcessos(params: Record<string, any> = {}) {
  const { data } = await api.get<ApiList<Processo>>("/processos", { params });
  return data.data;
}

export async function getProcessoById(id: string | number) {
  const { data } = await api.get<ApiSingle<Processo>>(`/processos/${id}`, {
    params: { populate: "notificacoes" },
  });
  return data.data;
}

export async function criarProcesso(payload: Record<string, any>) {
  const { data } = await api.post<ApiSingle<Processo>>("/processos", { data: payload });
  return data.data;
}

// ---- Simulador ----
export async function simular(payload: { cidade: string; latitude?: number; longitude?: number; altura?: number }) {
  const { data } = await api.post("/simulacaos", { data: payload });
  return data.data;
}
