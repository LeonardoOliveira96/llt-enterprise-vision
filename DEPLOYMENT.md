# Deployment Guide

## Local Development (Cloudflare Workers)

Para rodar a aplicação localmente com servidor:

```bash
npm run dev
```

Isso inicia o servidor em `http://localhost:5173` com todas as features de SSR.

## GitHub Pages Build

Para fazer build para GitHub Pages (estático):

```bash
npm run build:pages
```

Isso gera os arquivos em `dist-pages/` prontos para GitHub Pages.

Para testar localmente:

```bash
npm run preview:pages
```

## Deployment Automático

O projeto está configurado com GitHub Actions para fazer deploy automático:

1. **Quando faz push para `main`**, o workflow `.github/workflows/deploy-pages.yml` é acionado
2. **Build**: `npm run build:pages` cria a versão estática
3. **Deploy**: Arquivos são enviados para GitHub Pages automaticamente

### Configurar GitHub Pages

1. Vá para **Settings → Pages** do seu repositório
2. **Build and deployment** → Source: `GitHub Actions`
3. Pronto! O deploy será automático a cada push em `main`

## Diferenças entre ambientes

| Ambiente | Build | Saída | Servidor | URL |
|----------|-------|-------|----------|-----|
| **Dev Local** | `npm run dev` | Em memória | Vite Dev Server | http://localhost:5173 |
| **Cloudflare** | `npm run build` | `dist/` | Cloudflare Workers | Production URL |
| **GitHub Pages** | `npm run build:pages` | `dist-pages/` | Estático | GitHub Pages URL |

## Notas importantes

- ✅ Dev local não afeta Pages
- ✅ Build para Pages não afeta Cloudflare
- ✅ Cada um em seu próprio diretório (`dist` vs `dist-pages`)
- ✅ Workflows automáticos não interferem com dev local
