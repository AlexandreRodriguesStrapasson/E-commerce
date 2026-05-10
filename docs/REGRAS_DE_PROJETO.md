# Regras de Projeto — Confeitaria Auri

## 1. Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript 5 (strict mode) |
| Estilização | Tailwind CSS v4 + design tokens customizados |
| Banco de dados | MongoDB via Mongoose 9 |
| Autenticação | NextAuth 4 com JWT |
| Animações | Framer Motion 12 |
| Runtime | Node.js 20 |

## 2. Estrutura de Pastas

```
src/
├── app/            # Páginas e rotas (App Router)
│   ├── api/        # Route Handlers (endpoints REST)
│   ├── login/
│   ├── register/
│   └── products/
├── components/     # Componentes reutilizáveis
├── lib/
│   ├── models/     # Schemas Mongoose
│   └── mongodb.ts  # Conexão com cache global
├── hooks/          # Custom hooks React
├── middleware.ts   # Proteção de rotas
└── types/          # Tipos TypeScript globais
```

## 3. Padrões de Código

- Componentes que usam hooks ou eventos do browser devem ter `'use client'` no topo.
- Componentes de servidor (sem `'use client'`) são a preferência padrão no App Router.
- Conexão com o MongoDB sempre via `connectDB()` de `@/lib/mongodb` — nunca instanciar Mongoose diretamente.
- A verificação de `MONGODB_URI` ocorre dentro de `connectDB()`, nunca no nível do módulo.
- Todos os route handlers de API devem exportar `export const dynamic = 'force-static'` para compatibilidade com o export estático.
- Tipagem estrita habilitada — proibido uso de `any` salvo casos documentados.
- Formatação gerenciada pelo Prettier (configurado no projeto).

## 4. Design System

- **Paleta principal:** Chocolate (`choco-*`), Dourado (`gold-*`), Creme (`cream-*`).
- Fontes: `Playfair Display` (títulos), `Great Vibes` (script/logo), `Lato` (corpo).
- Utilitários globais definidos em `globals.css`: `.glass`, `.btn-primary`, `.text-gradient-gold`, `.divider-gold`.
- Animações de entrada usando Framer Motion com variantes `fadeInUp`, `slideIn` e spring staggered.

## 5. Ambiente e Variáveis

| Variável | Descrição |
|---|---|
| `MONGODB_URI` | String de conexão MongoDB Atlas |
| `NEXTAUTH_SECRET` | Secret para assinar tokens JWT |
| `NEXTAUTH_URL` | URL base da aplicação |

- O arquivo `.env.local` **nunca deve ser versionado** (já no `.gitignore`).
- O `.env.example` deve ser mantido atualizado com todas as variáveis necessárias.

## 6. Deploy

- O deploy é automatizado via **GitHub Actions** a cada push no branch `master`.
- O workflow gera um export estático (`output: 'export'`) e publica no branch `gh-pages`.
- O site fica disponível em: `https://alexandrerodriguesstrapasson.github.io/E-commerce/`
- Funcionalidades que dependem de banco de dados ficam inativas no ambiente estático.
- Para o ambiente completo (com DB e auth), usar **Vercel** com as variáveis de ambiente configuradas.

## 7. Git

- Branch principal: `master`.
- Mensagens de commit seguem o padrão **Conventional Commits**: `feat:`, `fix:`, `chore:`, `style:`, `ci:`, `docs:`.
- Não commitar `.env.local`, `node_modules/` ou `.next/`.
