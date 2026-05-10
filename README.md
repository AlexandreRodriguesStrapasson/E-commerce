# Confeitaria Auri — E-commerce

E-commerce de confeitaria artesanal com catálogo de produtos, autenticação e formulário de contato.

**Site:** https://alexandrerodriguesstrapasson.github.io/E-commerce/

---

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** com design system customizado
- **MongoDB** + **Mongoose** (persistência de dados)
- **NextAuth** (autenticação com JWT)
- **Framer Motion** (animações)

## Funcionalidades

- Página inicial com Hero, Sobre e Contato
- Catálogo de produtos com filtros por categoria e busca em tempo real
- Formulário de contato integrado ao banco de dados
- Sistema de autenticação (login e cadastro)
- Deploy automático no GitHub Pages via GitHub Actions

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Preencher MONGODB_URI, NEXTAUTH_SECRET e NEXTAUTH_URL

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse http://localhost:3000

## Documentação

- [Regras de Negócio](docs/REGRAS_DE_NEGOCIO.md)
- [Regras de Projeto](docs/REGRAS_DE_PROJETO.md)
- [Histórico e Roadmap](docs/HISTORICO.md)
