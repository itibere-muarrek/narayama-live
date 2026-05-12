# 🌐 NARAYAMA.LIVE - Deployment Guide

**Status:** ✅ Ready for Production  
**Version:** 3.1.0  
**Date:** May 12, 2026

---

## 📋 What is narayama.live?

- **Public website** (NO login required)
- **Static HTML + JSON** (NO database)
- Shows **6 countries** by default
- Shows **28 countries** after email validation
- **Responsive & Mobile-friendly**
- **NO RADAR** (only ainu.systems has graphs)

---

## 🚀 Quick Deploy to Vercel

### Option 1: CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd C:\Dev\narayama-live
vercel

# Follow prompts:
# - Project name: narayama-live
# - Framework: Other (static)
# - Build command: (skip)
# - Output directory: .
```

### Option 2: GitHub + Vercel Auto-Deploy

1. Create GitHub repo: `narayama-live`
2. Push code:
```bash
cd C:\Dev\narayama-live
git init
git add .
git commit -m "Initial commit: narayama.live v3.1.0"
git remote add origin https://github.com/YOUR_ACCOUNT/narayama-live.git
git push -u origin main
```

3. Connect to Vercel:
   - Go to vercel.com
   - Import project from GitHub
   - Select `narayama-live` repo
   - Auto-deploy on every push

### Option 3: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir .
```

---

## 🔧 Local Testing

```bash
# Python simple server
python -m http.server 3000

# Then open:
# http://localhost:3000
```

---

## 📊 File Structure

```
narayama-live/
├── index.html          (Main page - 28 countries, email validation)
├── package.json        (Metadata)
├── DEPLOY.md           (This file)
├── data/
│   ├── paises_6.json   (6 dashboard countries)
│   └── paises_28.json  (Full 28 countries)
└── .vercelignore       (Optional: skip files from deploy)
```

---

## 🔗 DNS & Domain Setup

### Using narayama.live domain:

1. **Register domain** (already done in spec)
2. **Point to Vercel:**
   - In your Vercel project settings
   - Go to Domains
   - Add `narayama.live`
   - Follow DNS instructions
3. **Wait 24-48 hours** for propagation

### Example DNS Records:
```
Name: narayama.live
Type: CNAME
Value: cname.vercel.com
```

---

## ✅ Checklist Before Going Live

- [x] Logo AYNU (not "Narayama")
- [x] Table 6 countries visible without login
- [x] Email form for validation
- [x] Table 28 countries shows after validation
- [x] 9 exact columns (Cod, Nome, NGII2000, Var%, NGII2024, Var%, N*, Status, Conditions)
- [x] NO RADAR (only on ainu.systems)
- [x] Responsive design
- [x] NO database (JSON static)
- [x] Data updated when code published
- [x] Version 3.1.0

---

## 📞 Troubleshooting

### Page shows 404?
- Make sure `index.html` is in root
- Vercel should auto-serve `index.html` for `/`

### Data not loading?
- Check `data/paises_6.json` and `data/paises_28.json` exist
- Check browser console for 404 errors
- Verify relative paths in `index.html`

### Email validation not working?
- JavaScript is client-side only (no backend needed)
- Works offline - just validates format
- Email is NOT stored or sent anywhere

### Want to update data?
1. Edit `data/paises_28.json` or `data/paises_6.json`
2. Commit to git
3. Push to GitHub (if using auto-deploy)
4. Vercel redeploys automatically (~1 min)

---

## 🎯 Success Criteria

✅ Site loads at https://narayama.live  
✅ Shows 6 countries initially  
✅ Email validation works  
✅ Shows 28 countries after validation  
✅ Fully responsive  
✅ Data updates every Friday 14:00 São Paulo  

---

**Ready to launch!** 🚀
