# Portfolio Setup Guide - Futuristic Cyber Aesthetic

## 🚀 Quick Start

Your portfolio has been completely redesigned with a modern futuristic cyber aesthetic! Follow these steps to get it up and running.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Setup EmailJS Integration** (for contact form)
   - Go to [EmailJS.com](https://www.emailjs.com/) and sign up
   - Create a new service (Gmail recommended)
   - Get your:
     - **Service ID** (e.g., `service_xxxxx`)
     - **Template ID** (e.g., `template_xxxxx`)
     - **Public Key** (e.g., `xxxxxxxxxxxxxxxxx`)
   
   - Open `src/components/Contact.tsx`
   - Replace these lines with your actual keys:
     ```typescript
     emailjs.init('YOUR_PUBLIC_KEY_HERE'); // Line ~31
     
     const response = await emailjs.send(
       'service_YOUR_SERVICE_ID',      // Line ~52
       'template_YOUR_TEMPLATE_ID',    // Line ~53
       {
         to_email: 'bacanistephen1@gmail.com',
         ...
       }
     );
     ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:3000`

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## 🎨 Design Features

### Futuristic Cyber Aesthetic
- **Dark theme** with cyan/blue neon accents
- **Glassmorphism** effects throughout
- **Animated gradients** and particle backgrounds
- **Glow effects** and neon borders
- **Smooth transitions** with Framer Motion

### Key Sections

#### 1. **Navigation Bar** (`src/components/Navbar.tsx`)
- Sticky glassmorphism navbar
- Active section highlighting with smooth underline
- Mobile hamburger menu with animations
- Smooth scrolling integration

#### 2. **Hero Section** (`src/components/Hero.tsx`)
- Full name: Stephen Simoun Gee Bacani
- **Typing animation** for dynamic roles:
  - Full Stack Developer
  - Web Developer
  - App Developer
  - QA
  - Business Analyst
- Profile image with glassmorphism and glow effects
- Download Resume button
- Social media links (GitHub, LinkedIn, Email)
- Animated scroll indicator

#### 3. **Skills Section** (`src/components/Skills.tsx`)
- 6 organized categories:
  - Frontend (React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3)
  - Backend (Node.js, Python, PHP, C++, JavaScript)
  - Mobile (Flutter, React Native)
  - Database (Firebase, MongoDB, PostgreSQL)
  - QA & Testing (Jira, Testing Tools)
  - Tools & DevOps (Git, Docker)
- Interactive skill cards with hover glow effects
- Animated icons with scaling on hover

#### 4. **Experience Section** (`src/components/Experience.tsx`)
- Timeline layout with alternating cards
- Professional experience entries
- Responsibilities listed with checkmarks
- Technologies used highlighted
- Animated timeline dots with pulse effect

#### 5. **Projects Section** (`src/components/Projects.tsx`)
- **Project 1: MuniciFix**
  - Image: `/public/MuniciFix.png`
  - Live: https://municifix1.vercel.app
  - Features: Municipal issue reporting, AI categorization, location tracking, real-time updates, image uploads
  
- **Project 2: BAC System**
  - Image: `/public/BAC.png`
  - Live: https://bac-system-three.vercel.app
  - Features: Procurement validation, PPMP management, document automation
  
- **Project 3: StudyLens**
  - Image: `/public/Profile.jpg` (placeholder)
  - Status: Coming Soon badge
  - Features: AI engagement detection, distraction monitoring, behavioral analysis

- Interactive hover effects with image zoom
- Gradient overlays and glow borders
- Coming Soon badge with animation

#### 6. **Contact Section** (`src/components/Contact.tsx`)
- Contact information cards (Email, Phone, Location)
- Social media links
- Contact form with:
  - Name, Email, Subject, Message fields
  - Beautiful input styling with focus effects
  - Loading state during submission
  - Success/Error messages
  - EmailJS integration for direct email delivery

#### 7. **Animated Particles** (`src/components/AnimatedParticles.tsx`)
- Floating animated particles with glow
- Background gradient blobs
- Grid pattern overlay
- Creates immersive futuristic atmosphere

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page with all sections
│   ├── globals.css       # Global styles with cyber theme
│   └── globals.d.ts      # TypeScript definitions
│
├── components/
│   ├── Navbar.tsx              # Navigation bar
│   ├── Hero.tsx                # Hero section with typing animation
│   ├── About.tsx               # About section
│   ├── Skills.tsx              # Skills grid
│   ├── Experience.tsx          # Experience timeline
│   ├── Projects.tsx            # Projects showcase
│   ├── Contact.tsx             # Contact form with EmailJS
│   ├── AnimatedParticles.tsx   # Background particles
│   └── Footer.tsx              # Footer with links
│
└── public/
    ├── Profile.jpg                          # Profile image
    ├── Simoun.jpg                          # Alternative profile image
    ├── MuniciFix.png                       # Project image
    ├── BAC.png                             # Project image
    ├── BACANI, STEPHEN SIMOUN GEE_UPDATED RESUME.PDF
    └── resume.pdf                          # Resume files
```

## 🎨 Customization Guide

### Colors & Theme
All theme colors are defined in `src/app/globals.css`. Main colors:
- **Cyan**: `#00d4ff` - Primary accent
- **Purple**: `#7c3aed` - Secondary accent
- **Dark Background**: `#0a0a15` - Primary background
- **Card Background**: `#1a1a3e` - Card surfaces

### Typography
- Primary Font: Inter/Segoe UI
- Heading Sizes: 3xl-8xl for different sections
- Font Weight: 600 (semibold) for headings, 400 for body

### Animations
- All animations use **Framer Motion**
- Durations: 0.3s-0.8s for smooth transitions
- Stagger effects: 0.1s-0.2s for sequential animations

### Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md/lg)
- Desktop: > 1024px (lg/xl)

## 📦 Dependencies

Key libraries included:
- **framer-motion**: ^10.16.4 - Animations and transitions
- **react-icons**: ^4.11.0 - Icon library
- **react-scroll**: ^1.8.10 - Smooth scrolling
- **@emailjs/browser**: ^3.11.0 - Email service
- **react-type-animation**: ^3.2.0 - Typing effects
- **next**: ^14.0.0 - React framework
- **tailwindcss**: ^3.3.0 - Utility CSS

## 🔧 Environment Variables

No environment variables required for basic setup, but for EmailJS:
- Service ID
- Template ID
- Public Key

(Set directly in Contact.tsx - for production, use .env.local)

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: Optimized touch targets, single column layouts
- **Tablet**: 2-column grid layouts, better spacing
- **Desktop**: Full multi-column grids, 3-column skills layout

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Push to GitHub, connect to Vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm run start`
- Output: `.next` folder

## 📝 Important Notes

1. **Resume Download**: The Download Resume button points to `/BACANI, STEPHEN SIMOUN GEE_UPDATED RESUME.PDF`
   - Make sure this file exists in the `public` folder
   - Update the path in `Hero.tsx` if filename changes

2. **Project Images**: 
   - Ensure all project images exist in `public` folder
   - Recommended size: 800x600px or higher
   - Formats: PNG, JPG, WEBP

3. **Social Links**:
   - Update GitHub, LinkedIn, and email in components
   - Links found in: Navbar, Hero, Contact, Footer

4. **Meta Data**:
   - Update in `src/app/layout.tsx`
   - Title, description, keywords

## 🎯 Next Steps

1. ✅ Replace placeholder text with your info
2. ✅ Update profile and project images
3. ✅ Setup EmailJS credentials
4. ✅ Test contact form
5. ✅ Deploy to Vercel/hosting platform
6. ✅ Add custom domain
7. ✅ Monitor analytics

## 🐛 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Contact Form Not Working
- Verify EmailJS credentials in Contact.tsx
- Check browser console for errors
- Ensure service/template IDs are correct

### Animations Stuttering
- Check browser hardware acceleration is enabled
- Reduce number of particles in AnimatedParticles.tsx if needed

### Images Not Loading
- Verify file paths in public folder
- Check file names match exactly (case-sensitive)
- Use Next.js Image component for optimization

## 📞 Support

For issues with:
- **Framer Motion**: https://www.framer.com/motion/
- **Next.js**: https://nextjs.org/docs
- **EmailJS**: https://www.emailjs.com/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Your portfolio is now ready to showcase your incredible skills and projects!** 🚀✨
