# Stephen Bacani - Developer Portfolio

A modern, dark-themed developer portfolio built with Next.js, React, Framer Motion, and Tailwind CSS. Featuring glassmorphism design, smooth animations, and responsive layouts.

## 🎨 Design Features

### Dark Theme & Aesthetic
- Deep gradient background (slate-950 → purple-900 → slate-900)
- Glassmorphism effects with backdrop blur
- Cyan and blue accent colors
- Professional developer aesthetic

### Animations & Interactions
- **Framer Motion** for smooth page transitions
- Animated gradient backgrounds in hero section
- Hover effects on all interactive elements
- Staggered animations for section content
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Fully responsive layout (mobile, tablet, desktop)
- Dynamic mobile navigation menu
- Optimized typography and spacing

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css           # Global styles with animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main portfolio page
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Skills.tsx            # Technical skills
│   ├── Projects.tsx          # Featured projects
│   ├── Contact.tsx           # Contact section
│   └── Footer.tsx            # Footer
public/
├── BACANI, STEPHEN SIMOUN GEE_UPDATED RESUME.PDF
└── resume.pdf
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The portfolio will be available at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is in use).

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling & Animation
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion 10** - Advanced animations
- **React Icons 4** - Technology icon library

### Navigation & Interaction
- **React Scroll** - Smooth scroll navigation
- **React Icons** - Feather icons for UI

## 📋 Sections

### 1. **Hero Section**
- Welcome message with animated gradient text
- Role and introduction
- Call-to-action buttons
- Social media links (GitHub, LinkedIn, Email)
- Animated background with gradient blobs

### 2. **About Section**
- Professional summary
- Key statistics (Projects, Languages, Technologies, Years)
- Education details from resume
- Glassmorphism card design

### 3. **Skills Section**
- Organized by categories:
  - Languages (JavaScript, Python, C++, etc.)
  - Frontend (React, Next.js, Tailwind CSS)
  - Mobile (Flutter, React Native, Ionic)
  - Backend & Database (Node.js, Firebase, MongoDB)
  - Tools (Git/GitHub)
- Technology icons with hover effects
- Specializations list

### 4. **Projects Section**
- Featured projects with:
  - Project title and description
  - Technology stack with icons
  - Key features/highlights
  - Live demo links
  - Project gradient headers
- Projects included:
  - **MuniciFix** - Municipal issue reporting with AI
  - **BAC System** - Procurement document management
  - **StudyLens** - Academic engagement monitoring

### 5. **Contact Section**
- Contact information cards (Email, Phone, Location)
- Contact form with fields:
  - Name
  - Email
  - Subject
  - Message
- Social media links
- Form submission feedback

### 6. **Footer**
- Brand and tagline
- Quick navigation links
- Social media links
- Scroll-to-top button
- Copyright notice

## 🎯 Key Features

✨ **Smooth Animations**
- Page load animations
- Scroll-triggered animations
- Hover and tap effects
- Staggered children animations

✨ **Glassmorphism Design**
- Semi-transparent cards
- Backdrop blur effect
- Elegant border styling
- Modern aesthetic

✨ **Accessibility**
- Semantic HTML
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance

✨ **Performance Optimized**
- Image optimization
- Code splitting
- CSS minification
- Production build optimization

## 🎮 Interactive Features

- **Smooth Navigation** - Click navbar items to smoothly scroll to sections
- **Hover Effects** - Interactive hover states on cards, buttons, and links
- **Mobile Menu** - Responsive hamburger menu on mobile devices
- **Contact Form** - Interactive form with validation and feedback
- **Social Links** - Direct links to GitHub, LinkedIn, and email

## 🔧 Customization

### Update Contact Information
Edit `src/components/Contact.tsx`:
```typescript
const contactInfo = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'your-email@example.com',
    link: 'mailto:your-email@example.com',
  },
  // ... other contact info
];
```

### Update Projects
Edit `src/components/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    liveLink: 'https://your-link.com',
    // ... other fields
  },
];
```

### Update Skills
Edit `src/components/Skills.tsx` to add/remove skills and reorganize categories.

## 🎨 Color Scheme

- **Background**: Deep slate to purple gradient
- **Primary Accent**: Cyan (#00d4ff)
- **Secondary Accent**: Blue (#3b82f6)
- **Text Primary**: White (#ffffff)
- **Text Secondary**: Gray (#e0e0e0)
- **Glass Background**: rgba(255, 255, 255, 0.05)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Metrics

- Optimized production build
- CSS-in-JS with Tailwind
- Image optimization
- Code splitting enabled
- Zero layout shifts

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables
No environment variables required for basic functionality.

For contact form email functionality, add:
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

## 📞 Contact & Support

- **Email**: bacanistephen1@gmail.com
- **Phone**: +63 969 570 8373
- **LinkedIn**: linkedin.com/in/stephen-simoun-gee-bacani
- **GitHub**: github.com/Simouni2
- **Portfolio**: portfolio-bacani-beige.vercel.app

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js and React documentation
- Tailwind CSS for utility-first styling
- Framer Motion for animation libraries
- React Icons for icon library

---

Built with ❤️ by Stephen Bacani | 2026
