# Portfolio Deployment Guide

## Overview
This guide covers deploying the Stephen Bacani portfolio to Vercel, the recommended platform for Next.js applications.

## Prerequisites
- GitHub account
- Project pushed to GitHub
- Vercel account (free)

## Deployment Steps

### 1. Push to GitHub

```bash
# If not already in a git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/your-repo.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI (Fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy (follow prompts)
vercel

# For production
vercel --prod
```

#### Option B: Using Vercel Dashboard

1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your portfolio repository
5. Configure build settings (should auto-detect Next.js)
6. Click "Deploy"

#### Option C: Using GitHub Integration

1. Go to [vercel.com/import](https://vercel.com/import)
2. Select "GitHub"
3. Choose your repository
4. Configure project settings
5. Deploy

### 3. Configure Custom Domain (Optional)

1. In Vercel dashboard, go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Environment Variables

If adding backend functionality, configure these in Vercel:

1. Go to Project Settings → Environment Variables
2. Add variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Build Configuration

The portfolio should auto-detect as Next.js. Default settings:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Post-Deployment

### Verify Deployment
- Visit your Vercel URL
- Test all navigation links
- Check contact form functionality
- Verify mobile responsiveness
- Test social media links

### Continuous Deployment
Vercel automatically deploys on:
- Pushes to main branch
- Pull request previews
- Manual redeployments

### Monitoring
- Access logs in Vercel dashboard
- Monitor performance metrics
- Check analytics

## Troubleshooting

### Build Fails
```bash
# Clear Vercel cache
vercel env pull .env.local
vercel build --prod

# Or redeploy
vercel --prod
```

### Performance Issues
1. Check Vercel analytics dashboard
2. Optimize images (already done with Next.js)
3. Review bundle size

### 404 Errors on Refresh
This is automatically handled by Next.js - no configuration needed.

## Local Testing Before Deployment

```bash
# Build production version locally
npm run build

# Start production server
npm start

# Should run on http://localhost:3000
```

## Updating Your Portfolio

After deployment, updates are automatic:

1. Make changes locally
2. Commit and push to GitHub
3. Vercel automatically redeploys
4. Changes live in ~30 seconds

## Rollback

If needed, use Vercel dashboard:
1. Go to Deployments
2. Find previous deployment
3. Click "..." and select "Promote to Production"

## Performance Tips

✅ Already implemented:
- Image optimization
- Code splitting
- CSS minification
- Font optimization

## API Routes (Future Enhancement)

If adding backend functionality:

```bash
# Create API route
touch src/app/api/contact/route.ts
```

Example contact form backend:
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  
  // Send email or save to database
  
  return NextResponse.json({ success: true });
}
```

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel CLI Reference](https://vercel.com/cli)

## Support

For deployment issues:
- Check Vercel status: [status.vercel.com](https://status.vercel.com)
- Review Vercel documentation
- Contact Vercel support

---

**Note**: The portfolio is fully functional on localhost. Deployment to Vercel takes approximately 1-2 minutes.
