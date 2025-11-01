# 💻 Guia de Setup e Deploy - DevPeth

Este guia contém todos os passos necessários para configurar, rodar e fazer o deploy do projeto DevPeth.

Ele é dividido em duas partes:
1. **Ambiente de Desenvolvimento Local** (para codificar e testar no seu PC).
2. **Ambiente de Produção** (para fazer o deploy no seu servidor caseiro).

---

## 1) Ambiente de Desenvolvimento Local

Siga estes passos para rodar o projeto em sua máquina para desenvolver e testar.

### Pré-requisitos
- [**Git**](https://git-scm.com/)
- [**Node.js**](https://nodejs.org/) (versão 18 ou superior)
- **npm** (geralmente instalado com o Node.js)

### Instalação

Siga estes passos no seu terminal:

**1) Clone o repositório**
```bash
# Use a URL do repositório (exemplo):
git clone https://github.com/emanueca/DevPeth.git
```

**2) Entre na pasta do projeto**

```bash
cd DevPeth
```

**3) Instale as dependências**

```bash
npm install
```

> **O que esse comando faz?**
> Ele lê o `package.json` e baixa todas as bibliotecas necessárias (React, Vite, etc.) para a pasta `node_modules`.
> Também gera o arquivo `package-lock.json`, que ajuda todos os desenvolvedores a usarem as mesmas versões dos pacotes.

### Variáveis de Ambiente (.env)

O projeto precisa de chaves de API para rodar.

1. Na raiz do projeto (`DevPeth/`), crie um arquivo chamado `.env.local`.
2. Cole o conteúdo abaixo:

```
# .env.local
GEMINI_API_KEY=PLACEHOLDER_API_KEY
```

*Nota: Mesmo que seja um placeholder, este arquivo é necessário para o Vite rodar (`npm run dev`) sem erros.*

### Rodando o projeto

Com tudo instalado, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Saída esperada:

```
VITE vX.X.X  ready in XXX ms

➜  Local:   http://localhost:x/
➜  Network: use --host to expose
```

Acesse `http://localhost:x/` no navegador para ver a aplicação.

---

## 2) Deploy em Servidor de Produção (Servidor Caseiro)

**(em desenvolvimento...)**

Esta seção descreve o processo para “buildar” o projeto e servi-lo em um ambiente de produção (como o seu servidor Ubuntu com Nginx/Apache).

### Visão geral do deploy

No deploy de produção, em vez de rodar `npm run dev`, geramos arquivos estáticos (HTML/CSS/JS) otimizados e usamos um servidor web real para entregá-los.

### Passo 1: Configurar `vite.config.ts` para produção

Para rodar na raiz (ex.: `http://meu-ip/`), garanta que seu `vite.config.ts` esteja assim:

```ts
// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
// ...
export default defineConfig(({ mode }) => {
    // ...
    return {
      // MODIFIQUE AQUI:
      // Mude de '/DevPeth/' ou qualquer outra coisa para '/'
      base: '/', 
      
      // ... resto do arquivo
    };
});
```

### Passo 2: Variáveis de ambiente de produção

Assim como o `.env.local` é para desenvolvimento, use `.env.production.local` no build de produção.

1. Na raiz do projeto, crie `.env.production.local`.
2. Coloque suas chaves reais:

```
# .env.production.local
GEMINI_API_KEY=SUA_CHAVE_API_REAL_VAI_AQUI
```

*Esse arquivo é ignorado pelo `.gitignore`, então a chave não vai para o GitHub.*

### Passo 3: “Buildar” o projeto

```bash
npm run build
```

Isso vai:

1. Ler seu código e o `.env.production.local`;
2. Criar a pasta `dist/`;
3. Preencher `dist/` com HTML, CSS e JS otimizados.

### Passo 4: Publicar no servidor

1. Copie **todo o conteúdo** de `dist/` para o servidor.
2. O destino comum é `/var/www/html/` (Apache/Nginx) ou um diretório que você configurou.
3. Configure o servidor web (Nginx/Apache) para **servir** esses arquivos.

*(Detalhes de Nginx/Apache serão adicionados aqui...)*
