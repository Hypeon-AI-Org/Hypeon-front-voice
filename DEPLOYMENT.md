# Vercel Deployment Guide

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/hypeon-front-voice)

## Step-by-Step Deployment

### 1. Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- Git installed locally

### 2. Push to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit - deployment ready"
git branch -M main
git remote add origin https://github.com/yourusername/hypeon-front-voice.git
git push -u origin main
```

### 3. Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install`

### 4. Environment Variables (Optional)

If you need environment variables:

1. In Vercel project settings, go to "Environment Variables"
2. Add variables from `.env.example`:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., https://voice.hypeon.ai)
   - Add any API keys or other secrets

### 5. Deploy

1. Click "Deploy"
2. Wait 1-2 minutes for the build to complete
3. Your site will be live at `https://your-project.vercel.app`

### 6. Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your custom domain (e.g., voice.hypeon.ai)
3. Configure DNS records as instructed by Vercel
4. SSL certificate will be auto-provisioned

## Build Configuration

The project is configured with:

- ✅ Next.js 15 with App Router
- ✅ TypeScript with strict mode
- ✅ Automatic optimization
- ✅ Image optimization
- ✅ Security headers
- ✅ Compression enabled
- ✅ SEO-ready metadata
- ✅ PWA manifest
- ✅ robots.txt

## Performance Features

- **Edge Functions**: Deployed globally for low latency
- **Incremental Static Regeneration**: Automatic caching
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic bundle optimization
- **CDN**: Global edge network

## Post-Deployment Checklist

- [ ] Verify site loads correctly
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify SEO metadata (view page source)
- [ ] Test form submissions (if any)
- [ ] Check console for errors
- [ ] Test in different browsers
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up analytics (Google Analytics, PostHog, etc.)
- [ ] Configure custom domain
- [ ] Set up monitoring (Vercel Analytics)

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:

- Deploy production on push to `main` branch
- Create preview deployments for pull requests
- Run builds and show status in GitHub

## Vercel CLI (Optional)

Install Vercel CLI for local testing:

```bash
npm i -g vercel
vercel login
vercel --prod  # Deploy to production
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Environment Variables Not Working

1. Make sure variables start with `NEXT_PUBLIC_` for client-side access
2. Redeploy after adding environment variables

### Performance Issues

1. Check Vercel Analytics
2. Run Lighthouse audit
3. Optimize images in `/public` folder
4. Review bundle size with `npm run build`

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

## Cost

- **Hobby Plan**: Free for personal projects
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic HTTPS
  
- **Pro Plan**: $20/month for commercial use
  - Advanced analytics
  - Higher limits
  - Priority support
