# 🚀 Stephen Bacani - Modern Developer Portfolio

A stunning, production-ready developer portfolio built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion**. Featuring a dark theme with glassmorphism design, smooth animations, and full responsiveness.

## ✨ Key Features

- 🎨 **Modern Dark Theme** - Purple/slate gradient background
- ✨ **Glassmorphism Design** - Elegant cards with blur effects
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Perfect on any device
- 🎯 **Interactive Elements** - Hover effects and transitions
- 🔧 **Component-Based** - Clean, reusable React components
- ⚡ **Performance Optimized** - Fast load times
- 📝 **Well Documented** - Complete guides included

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Running

```bash
# Clone or navigate to project
cd Bacani_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## 📚 Documentation

### **START HERE** 👇

| Documentation | Purpose | Time |
|---------------|---------|------|
| [INDEX.md](INDEX.md) | 📋 Complete index of all docs | 5 min |
| [QUICKSTART.md](QUICKSTART.md) | ⚡ Fast 5-minute setup | 5 min |
| [PORTFOLIO_README.md](PORTFOLIO_README.md) | 📖 Full feature guide | 20 min |
| [DEPLOYMENT.md](DEPLOYMENT.md) | 🚀 Deploy to production | 15 min |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | 📊 Project overview | 10 min |
| [VERIFICATION.md](VERIFICATION.md) | ✅ Requirements checklist | 10 min |

**👉 New to this portfolio? Start with [INDEX.md](INDEX.md)**

## 📋 Portfolio Sections

### 1. Hero Section
- Animated gradient background
- Welcome badge
- Name with gradient text effect
- Professional tagline
- CTA buttons (View Projects, Get in Touch)
- Social media icons

### 2. About Me
- Professional background
- Key achievements stats
- Education details (CSU, Dean's Lister, GWA 92.46)
- Career highlights

### 3. Technical Skills
- **Languages**: JavaScript, Python, C++, TypeScript, HTML5, CSS3, PHP
- **Frontend**: React, Next.js, Tailwind CSS
- **Mobile**: Flutter, React Native, Ionic Angular
- **Backend**: Node.js, Firebase, MongoDB
- **Tools**: Git/GitHub
- **15+ technology icons** with proper styling

### 4. Featured Projects

| Project | Description | Technologies | Link |
|---------|-------------|--------------|------|
| **MuniciFix** | Municipal issue reporting with AI clustering | Ionic Angular, JavaScript, REST APIs | [Live Demo](https://municifix1.vercel.app) |
| **BAC System** | Procurement document pre-verification platform | React Native, Firebase | [Live Demo](https://bac-system-three.vercel.app) |
| **StudyLens** | Academic engagement monitoring with ML | Python, Machine Learning | Not deployed |

### 5. Contact Section
- Contact information (Email, Phone, Location)
- Social media links (GitHub, LinkedIn, Email)
- Interactive contact form
- Form validation and feedback

### 6. Footer
- Quick navigation links
- Social media icons
- Scroll-to-top button
- Copyright information

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion 10** - Advanced animations

### Development Tools
- **React Icons 4** - Technology icon library
- **React Scroll** - Smooth scroll navigation
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

## 🎨 Design System

### Color Palette
- **Background Gradient**: `#0f0f1e` → `#1a1a2e` → `#16213e`
- **Primary Accent**: `#00d4ff` (Cyan)
- **Secondary Accent**: `#3b82f6` (Blue)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#e0e0e0` (Light Gray)
- **Glass Background**: `rgba(255, 255, 255, 0.05)`

### Effects
- Glassmorphism with 10px backdrop blur
- Animated gradients
- Smooth transitions (0.3s)
- Hover scale and glow effects
- Staggered animations

## 📱 Responsive Design

- **Mobile** (< 640px) - Optimized touch interface
- **Tablet** (640px - 1024px) - Adaptive layout
- **Desktop** (> 1024px) - Full feature display
- **Large** (> 1280px) - Spacious layout

## ⚡ Available Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start              # Start production server

# Code Quality
npm run lint           # Run ESLint

# Deployment
vercel --prod          # Deploy to Vercel
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 🎨 Customization

### Update Contact Information
Edit `src/components/Contact.tsx`:
```typescript
// Line ~80
{
  value: 'your-email@example.com',
  link: 'mailto:your-email@example.com',
}
```

### Add a Project
Edit `src/components/Projects.tsx`:
```typescript
// Line ~14
{
  title: 'Your Project',
  description: 'Description',
  liveLink: 'https://your-link.com',
  // ... other properties
}
```

### Change Colors
Edit `src/app/globals.css` and `tailwind.config.js`

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       ← Global styles & animations
│   ├── layout.tsx        ← Root layout
│   └── page.tsx          ← Main portfolio page
└── components/
    ├── Navbar.tsx        ← Navigation bar
    ├── Hero.tsx          ← Hero section
    ├── About.tsx         ← About section
    ├── Skills.tsx        ← Skills section
    ├── Projects.tsx      ← Projects section
    ├── Contact.tsx       ← Contact section
    └── Footer.tsx        ← Footer
```

## 📊 Performance

- ✅ Optimized production build
- ✅ Image optimization enabled
- ✅ Code splitting
- ✅ CSS minification
- ✅ Hardware-accelerated animations
- ✅ Fast load times

## 🔒 Quality Assurance

- ✅ TypeScript strict mode
- ✅ No console warnings or errors
- ✅ Responsive design tested
- ✅ Cross-browser compatible
- ✅ Accessibility compliant
- ✅ WCAG standards met

## 📞 Contact Information

- **Email**: bacanistephen1@gmail.com
- **Phone**: +63 969 570 8373
- **Location**: Enrile, Cagayan Valley, Philippines
- **LinkedIn**: [linkedin.com/in/stephen-simoun-gee-bacani](https://linkedin.com/in/stephen-simoun-gee-bacani)
- **GitHub**: [github.com/Simouni2](https://github.com/Simouni2)

## 🎓 Education

**Bachelor of Science in Computer Science**
- Cagayan State University – Carig Campus
- September 2022 – May 2026
- Dean's Lister for 8 consecutive semesters
- GWA: 92.46

## 📖 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Icons Gallery](https://react-icons.github.io/react-icons/)

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js and React communities
- Tailwind CSS for modern styling
- Framer Motion for animation library
- React Icons for comprehensive icon library

---

## 🎯 Next Steps

1. **View Local Version**: Run `npm run dev`
2. **Explore Documentation**: Start with [INDEX.md](INDEX.md)
3. **Deploy**: Follow [DEPLOYMENT.md](DEPLOYMENT.md)
4. **Share**: Share your live portfolio link

---

**Built with ❤️ using modern web technologies**

Your portfolio is ready to impress! 🚀

*Last Updated: May 10, 2026*
