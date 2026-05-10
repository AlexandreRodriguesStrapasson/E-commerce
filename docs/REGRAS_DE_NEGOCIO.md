# Regras de Negócio — Confeitaria Auri

## 1. Produtos

- Todo produto possui: nome, descrição, preço, categoria, emoji, disponibilidade e destaque.
- Apenas produtos com `available: true` são exibidos no cardápio público.
- Produtos marcados como `featured: true` aparecem primeiro na listagem.
- As categorias válidas são: **Bolos**, **Tortas**, **Doces**, **Cupcakes**, **Pudins**.
- O preço mínimo de um produto é R$ 0,00 (validado no schema).

## 2. Cardápio

- O cliente pode filtrar produtos por categoria ou buscar por nome.
- A busca é case-insensitive e aplica-se ao campo `name`.
- Produtos indisponíveis não aparecem em nenhum filtro.

## 3. Contato / Encomendas

- O formulário de contato exige: **nome**, **telefone/WhatsApp** e **mensagem**.
- Todos os campos são obrigatórios — envio é bloqueado se algum estiver vazio.
- Cada mensagem é salva no banco de dados para consulta posterior.
- O prazo padrão para resposta de encomendas é comunicado na seção de contato.

## 4. Autenticação

- O cadastro exige: **nome**, **e-mail** e **senha** (mínimo 6 caracteres).
- Não é permitido cadastrar dois usuários com o mesmo e-mail (erro 409).
- Senhas são armazenadas com hash bcrypt (salt 12) — nunca em texto puro.
- A sessão é gerenciada via JWT (NextAuth).
- Existem dois papéis de usuário: `customer` (padrão) e `admin`.

## 5. Acesso e Permissões

- As rotas `/admin/*`, `/checkout/*` e `/orders/*` são protegidas por middleware.
- Apenas usuários com papel `admin` acessam rotas administrativas — demais são redirecionados para `/`.
- Usuários não autenticados são redirecionados para `/login` ao tentar acessar rotas protegidas.

## 6. Seed de Dados

- O endpoint `/api/seed` popula o banco com 14 produtos de exemplo.
- Esse endpoint está **bloqueado em produção** (retorna 403) e deve ser usado apenas em desenvolvimento.
