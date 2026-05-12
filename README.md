# 🌍 NARAYAMA.LIVE v3.1.0

**AINU-Narayama Public Website**  
Índice de Sustentabilidade Intergeracional de 28 Países

---

## ✨ Features

- 📊 **6 países visíveis** sem login (Alemanha, Argentina, Brasil, China, EUA, Japão)
- 📧 **Email validation** para acessar 28 países
- 📱 **Responsivo** (mobile, tablet, desktop)
- ⚡ **Zero database** (JSON estático)
- 🔐 **Privacidade** (email NOT stored)
- 📈 **Dados atualizados** toda sexta 14:00 SP

---

## 🚀 Deploy Options

### Option 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel deploy --prod
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

### Option 3: GitHub + Auto-Deploy
```bash
git remote add origin https://github.com/seu-usuario/narayama-live.git
git push -u origin main

# Em vercel.com: Import projeto → Auto-deploy
```

---

## 📁 Estrutura

```
├── index.html              # Site principal
├── data/
│   ├── paises_6.json      # 6 países dashboard
│   └── paises_28.json     # 28 países completo
├── package.json
├── .gitignore
└── DEPLOY.md              # Instruções detalhadas
```

---

## 🧪 Local Testing

```bash
python -m http.server 3000
# Abrir: http://localhost:3000
```

---

## 📊 Dados

**6 Dashboard Countries:**
- Alemanha, Argentina, Brasil, China, EUA, Japão

**28 Total Countries:**
- +6 acima
- +22 adicionais: Vietnã, México, Chile, Colômbia, Peru, Uruguai, Espanha, França, Itália, Reino Unido, Rússia, Índia, Indonésia, Tailândia, Coreia do Sul, Taiwan, Malásia, África do Sul, Egito, Nigéria, Irã, Austrália

---

## 🔗 Links

- **ainu.systems:** https://backend-ainu-systems--ItibereMuarrek.replit.app
- **narayama.live:** https://narayama.live (após deploy)
- **Documentação:** Ver DEPLOY.md

---

## ✅ Checklist Antes de Deploy

- [x] index.html completo
- [x] paises_6.json válido
- [x] paises_28.json válido
- [x] Responsivo (testar em mobile)
- [x] Email validation funciona
- [x] Sem erros de console
- [x] Git commit feito

---

**v3.1.0** | 12 de Maio de 2026 | Sem farsa, sem invenção
