# 🚀 Quick Start Guide

## Getting Started

### 1. Start Development Server
```bash
cd c:\Users\Stephen\Desktop\Bacani_Portfolio
npm run dev
```
Open: **http://localhost:3001**

### 2. View Your Portfolio
- ✅ All sections loading
- ✅ Smooth animations
- ✅ Responsive design
- ✅ Contact form working

---

## 📁 Important Files to Edit

### Update Your Info
**Contact**: `src/components/Contact.tsx` (line ~80)
```typescript
value: 'your-email@example.com'
```

**Projects**: `src/components/Projects.tsx` (line ~14)
```typescript
{
  title: 'Your Project',
  description: 'Your description',
  liveLink: 'https://your-link.com'
}
```

**Skills**: `src/components/Skills.tsx`
Add/remove from technology categories

---

## 🛠️ Common Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel --prod

# Install dependencies
npm install

# Check for errors
npm run lint
```

---

## 📱 Test Responsiveness

DevTools: Press `F12` → Toggle device toolbar

- Mobile: 375px wide
- Tablet: 768px wide
- Desktop: 1280px wide

---

## 🎨 Change Colors

Edit `src/app/globals.css`:
```css
/* Accent colors */
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR 0%, #YOUR_COLOR2 100%);
}
```

Edit `tailwind.config.js`:
```typescript
colors: {
  'accent': '#YOUR_COLOR'
}
```

---

## 🚀 Deploy Steps

### Deploy to Vercel
1. `npm i -g vercel`
2. `vercel --prod`
3. Follow prompts

### Get Live URL
Vercel automatically provides your URL

### Custom Domain
Vercel Dashboard → Domains

---

## 🐛 Troubleshooting

### Port 3000 in use?
```bash
# Runs on 3001 instead (automatic)
npm run dev
```

### Build errors?
```bash
# Clear cache and rebuild
rm -r .next
npm run build
```

### Module not found?
```bash
# Reinstall dependencies
npm install
```

---

## 📊 Project Structure

```
src/
├── app/
│   ├── globals.css       ← Global styles
│   ├── layout.tsx        ← Layout
│   └── page.tsx          ← Main page
└── components/           ← All components
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

---

## ✅ Verification Checklist

- [ ] Dev server runs: `npm run dev`
- [ ] Portfolio loads: `http://localhost:3001`
- [ ] Navigation works
- [ ] Animations smooth
- [ ] Mobile responsive
- [ ] Contact info shows
- [ ] Project links work
- [ ] Social links active

---

## 📞 Info Displayed

**Email**: bacanistephen1@gmail.com
**Phone**: +63 969 570 8373
**Location**: Enrile, Cagayan Valley, Philippines
**LinkedIn**: linkedin.com/in/stephen-simoun-gee-bacani
**GitHub**: github.com/Simouni2

---

## 📚 Full Documentation

- **PORTFOLIO_README.md** - Complete guide
- **DEPLOYMENT.md** - Deployment instructions
- **PROJECT_SUMMARY.md** - Full project summary

---

## 🎯 Next: Deploy Live

See **DEPLOYMENT.md** for step-by-step deployment guide.

Your portfolio is ready to go! 🚀
