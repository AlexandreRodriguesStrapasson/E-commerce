# Confeitaria Auri — E-commerce

Projeto full stack de e-commerce para confeitaria artesanal, desenvolvido como portfólio técnico.

O **[site no GitHub Pages](https://alexandrerodriguesstrapasson.github.io/E-commerce/)** exibe o frontend em produção. O backend — autenticação real, banco de dados e APIs REST — está implementado e funciona ao rodar o projeto localmente ou em um ambiente com servidor (Vercel + MongoDB).

---

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** com design system customizado
- **MongoDB** + **Mongoose** (persistência de dados)
- **NextAuth 4** (autenticação com JWT)
- **Framer Motion** (animações)

---

## Frontend (GitHub Pages)

Acesse a demonstração visual em:
**https://alexandrerodriguesstrapasson.github.io/E-commerce/**

- Página inicial com Hero, Sobre e Contato
- Catálogo de produtos com filtros por categoria e busca em tempo real
- Design system próprio: paleta chocolate/dourado/creme, tipografia customizada
- Animações com Framer Motion
- Layout responsivo

> O GitHub Pages serve apenas arquivos estáticos — as funcionalidades de banco de dados ficam inativas nesse ambiente.

---

## Backend (funcional localmente)

O backend está completamente implementado e pode ser testado rodando o projeto localmente.

- **Autenticação** — cadastro e login com NextAuth + bcrypt (hash de senha, sessão JWT)
- **API de produtos** — listagem com filtros por categoria e busca por nome
- **API de contato** — formulário integrado ao banco, mensagens persistidas no MongoDB
- **Seed de dados** — endpoint para popular o banco com 14 produtos de exemplo
- **Middleware de proteção** — rotas `/admin`, `/checkout` e `/orders` protegidas por papel de usuário

---

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

Acesse `http://localhost:3000` com MongoDB rodando localmente.

---

## Documentação

- [Regras de Negócio](docs/REGRAS_DE_NEGOCIO.md)
- [Regras de Projeto](docs/REGRAS_DE_PROJETO.md)
- [Histórico e Roadmap](docs/HISTORICO.md)
