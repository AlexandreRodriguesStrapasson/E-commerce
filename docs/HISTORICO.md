# Histórico e Roadmap — Confeitaria Auri

## Feito

### 2026-04-06 — Inicialização do projeto
- Projeto Next.js criado com TypeScript e Tailwind CSS.
- Estrutura de pastas definida e Prettier configurado.
- Variáveis de ambiente documentadas no `.env.example`.

### 2026-04-27 — Autenticação
- Implementação de login e registro com **NextAuth** e **bcryptjs**.
- Schema de usuário com papéis `customer` e `admin`.
- Sessão via JWT com callbacks de role e id.
- Middleware de proteção para rotas `/admin/*`, `/checkout/*` e `/orders/*`.

### 2026-04-30 — Identidade visual
- Design system completo: paleta chocolate/dourado/creme.
- Fontes Playfair Display, Great Vibes e Lato integradas.
- Componentes base: `Logo`, `HeroSection`, `Navbar`.
- Animações com Framer Motion (blobs, fadeInUp, spring stagger).

### 2026-05-05 — Tema dark chocolate e refinamento visual
- Ajuste geral do tema para tons escuros de chocolate.
- Refinamento da identidade visual em todos os componentes.

### 2026-05-09 — Cardápio, contato e seções da homepage
- **API de produtos** com filtros por categoria e busca por nome.
- **Endpoint de seed** com 14 produtos de exemplo (bloqueado em produção).
- **Página de cardápio** (`/products`) com filtros, busca em tempo real e toast de confirmação.
- **SobreSection** com história da confeitaria e estatísticas.
- **ContatoSection** com formulário integrado à API e informações de atendimento.
- **Modelo Contact** para persistência das mensagens no MongoDB.
- **Providers** wrapper para expor o contexto de sessão NextAuth.
- **Navbar** atualizada com estado de sessão (exibe nome do usuário logado / botões Entrar-Sair).

### 2026-05-09 — Deploy estático no GitHub Pages
- Configuração de `output: 'export'` e `basePath: '/E-commerce'` no `next.config.ts`.
- Workflow GitHub Actions para build e deploy automático no branch `gh-pages`.
- Correção do `connectDB()` para não lançar erro em nível de módulo (evita crash no build).
- Adição de `export const dynamic = 'force-static'` em todos os route handlers.
- Formulários de login e registro exibem mensagem "Em desenvolvimento" enquanto o banco não está configurado.

---

## A fazer

### Curto prazo
- [ ] Configurar MongoDB Atlas e conectar ao ambiente de produção (Vercel).
- [ ] Ativar autenticação real (remover bloqueio "Em desenvolvimento").
- [ ] Executar endpoint `/api/seed` para popular o banco com os produtos iniciais.
- [ ] Testar fluxo completo: cadastro → login → cardápio → contato.

### Médio prazo
- [ ] **Carrinho de compras** — estado global de itens selecionados (Context ou Zustand).
- [ ] **Página de checkout** — resumo do pedido, dados de entrega e confirmação.
- [ ] **Model de pedido (`Order`)** — schema com itens, total, status e referência ao usuário.
- [ ] **Painel administrativo** (`/admin`) — CRUD de produtos e visualização de pedidos e mensagens de contato.
- [ ] Upload de imagens reais para produtos (substituir emojis por fotos).

### Longo prazo
- [ ] Integração com gateway de pagamento (Mercado Pago ou Stripe).
- [ ] Notificações por e-mail ao cliente após pedido confirmado.
- [ ] Área do cliente (`/orders`) com histórico de pedidos.
- [ ] Dashboard com métricas de vendas para o admin.
- [ ] PWA (Progressive Web App) para acesso via celular com instalação.
