# Voice.hypeon.ai - AI Voice Receptionist Landing Page

A production-ready, high-performance landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🚀 Deploy to Vercel (2 minutes)

1. Push to GitHub: `git init && git add . && git commit -m "Initial commit"`
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your repository → Click "Deploy"
4. Done! 🎉

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide | ✅ [CHECKLIST.md](./CHECKLIST.md) for deployment tasks

## ✨ Features

- **Next.js 15 App Router** - Server components and optimal rendering
- **TypeScript** - Full type safety
- **Tailwind CSS** - Custom animations and glassmorphism effects
- **Lucide React Icons** - Beautiful, consistent icons
- **Fully Responsive** - Mobile-first design
- **Performance Optimized** - 110 KB First Load JS
- **SEO Ready** - Complete meta tags, sitemap, and robots.txt
- **PWA Ready** - Web manifest included
- **Book Demo Form** - Popup form with email integration (sends to yash@hypeon.ai)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.9
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Runtime**: Node.js 18+

## 📁 Project Structure

```
Hypeon-front-voice/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   ├── sitemap.ts       # Dynamic sitemap
│   └── globals.css      # Global styles and animations
├── components/
│   ├── LandingPage.tsx      # Main landing page component
│   ├── Navigation.tsx       # Header and navigation
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── ProblemSection.tsx   # Problem statement
│   ├── SolutionSection.tsx  # Solution overview
│   ├── HowItWorksSection.tsx # Process explanation
│   ├── IndustriesSection.tsx # Target industries
│   ├── BenefitsSection.tsx  # Benefits and features
│   ├── FAQSection.tsx       # FAQ accordion
│   ├── CTASection.tsx       # Final call-to-action
│   └── Footer.tsx           # Footer component
├── public/
│   ├── favicon.svg      # Site icon
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # SEO crawler rules
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

## 🎨 Design Features

- **Glassmorphism** - Modern glass-effect cards with backdrop blur
- **Custom Animations** - Shine effects, smooth transitions, and hover states
- **Dark Theme** - Professional dark color scheme with emerald accents
- **Grid Background** - Subtle grid pattern for depth
- **Ambient Glows** - Soft gradient glows for visual interest

## 🔧 Available Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Check TypeScript types
- `npm run check` - Run type-check and lint

## 📧 Book Demo Feature

The site includes a fully functional "Book Demo" popup form that sends submissions to yash@hypeon.ai using Gmail SMTP.

**Setup:**
1. Enable 2-Step Verification on your Gmail account
2. Create an App Password from https://myaccount.google.com/security
3. Add to `.env.local`:
   ```
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-password
   ```
4. Start the dev server and test!

📖 See [BOOK_DEMO_SETUP.md](./BOOK_DEMO_SETUP.md) for complete setup instructions.

**Benefits:** FREE, 500 emails/day, reliable Gmail servers, professional HTML emails.

## 🚢 Deployment Options

### Vercel (Recommended)
- Auto-detects Next.js configuration
- Global CDN with edge functions
- Automatic HTTPS and SSL
- Preview deployments for PRs
- Free tier: 100GB bandwidth/month

### Other Platforms
- **Netlify**: Import from GitHub, select Next.js preset
- **AWS Amplify**: Connect repository, configure build settings
- **Docker**: Use official Next.js Docker example
- **Self-hosted**: Run `npm run build && npm start`

## 📝 Customization

### Update Content
Edit component files in `components/` directory to change text and content.

### Change Colors
Modify `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  emerald: { /* your colors */ }
}
```

### Modify Animations
Update animations in `app/globals.css` under `@layer utilities`.

### Environment Variables
Copy `.env.example` to `.env.local` and update values:
```bash
cp .env.example .env.local
```

## 🔒 Security & Performance

- ✅ Security headers configured (HSTS, XSS protection)
- ✅ Image optimization (WebP/AVIF)
- ✅ Compression enabled (Gzip/Brotli)
- ✅ Code splitting (automatic)
- ✅ Static generation (all pages)
- ✅ Bundle size: 110 KB (First Load JS)

## 📊 Expected Performance

After deployment, Lighthouse scores should be:
- **Performance**: 90-100
- **Accessibility**: 95-100
- **Best Practices**: 95-100
- **SEO**: 100

## 📚 Documentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment guide
- [CHECKLIST.md](./CHECKLIST.md) - Pre/post-deployment checklist
- `.env.example` - Environment variables template

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**TypeScript errors?**
```bash
npm run type-check
```

**Linting issues?**
```bash
npm run lint:fix
```

## 📄 License

Copyright © 2024 Hypeon.ai

## 🤝 Support

For questions or support, contact the Hypeon.ai team.

---

**Ready to deploy?** Follow the [Quick Start](#-quick-start) and [Deploy](#-deploy-to-vercel-2-minutes) sections above! 🚀
