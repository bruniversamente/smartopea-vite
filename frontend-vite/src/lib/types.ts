export type ImageFormat = {
  url: string; width: number; height: number; size?: number; name?: string; mime?: string;
};

export type Media = {
  id: number;
  url: string;
  alternativeText?: string;
  caption?: string;
  formats?: Record<string, ImageFormat>;
};

export type Post = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    content?: string;
    cover?: { data?: Media };
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
};

export type Portfolio = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    body?: string;
    cover?: { data?: Media };
    createdAt: string;
    updatedAt: string;
  };
};

export type Processo = {
  id: number;
  attributes: {
    protocolo?: string;
    status?: string;
    resumo?: string;
    createdAt: string;
    updatedAt: string;
    notificacoes?: any[];
  };
};

export type ApiList<T> = { data: T[]; meta?: any };
export type ApiSingle<T> = { data: T; meta?: any };

export type LoginResponse = {
  jwt: string;
  user: { id: number; username: string; email: string };
};
