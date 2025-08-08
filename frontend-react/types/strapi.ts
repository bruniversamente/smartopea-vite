export interface Media {
  url: string
  alternativeText?: string
  caption?: string
  formats?: {
    thumbnail?: { url: string }
    small?: { url: string }
    medium?: { url: string }
    large?: { url: string }
  }
}

export interface Comentario {
  id: number
  nome: string
  email?: string
  mensagem: string
  data: string
}

export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  postDate: string
  cover: Media
  content: string
  comentarios?: Comentario[]
}

export interface Portfolio {
  id: number
  title: string
  slug: string
  description: string
  location: string
  cover: Media
  gallery: Media[]
  content: string
}

export interface Processo {
  id: number
  documentId: string
  nomeEmpreendimento: string
  enderecoObjeto: string
  altura: number
  tipologia: string
  material: string
  situacaoObra: string
  detalhesEquipamento?: string
  statusProcesso: string
  nomeProprietario: string
  cpfCnpj: string
  enderecoProprietario: string
  telefoneProprietario: string
  emailProprietario: string
  contratoSocial?: Media | Media[]
  termoOutorga?: Media | Media[]
}
