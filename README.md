# Voice.hypeon.ai - AI Voice Receptionist Landing Page

A production-ready, high-performance landing page built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 15 App Router** - Latest Next.js with server components and optimal rendering
- **TypeScript** - Full type safety and excellent developer experience
- **Tailwind CSS** - Utility-first CSS with custom animations and glassmorphism effects
- **Lucide React Icons** - Beautiful, consistent icon system
- **Fully Responsive** - Mobile-first design that works on all devices
- **Performance Optimized** - Fast loading times and smooth animations
- **SEO Ready** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.4
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Runtime**: Node.js 22+

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
Hypeon-front-voice/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
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
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Design Features

- **Glassmorphism** - Modern glass-effect cards with backdrop blur
- **Custom Animations** - Shine effects, smooth transitions, and hover states
- **Dark Theme** - Professional dark color scheme with emerald accents
- **Grid Background** - Subtle grid pattern for depth
- **Ambient Glows** - Soft gradient glows for visual interest

## 🚢 Deployment

### Vercel (Recommended) ✨

**One-Click Deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

**Manual Deployment:**

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically - Vercel auto-detects Next.js settings
4. Your site will be live in ~2 minutes!

**Configuration:**
- ✅ Build command: `npm run build` (auto-detected)
- ✅ Output directory: `.next` (auto-detected)
- ✅ Install command: `npm install` (auto-detected)
- ✅ Node version: 18+ (specified in package.json)

📖 See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide.

### Other Platforms

This is a standard Next.js app that can be deployed anywhere:

- **Netlify**: Import from GitHub, select Next.js preset
- **AWS Amplify**: Connect repository, configure build settings
- **Docker**: Use the official Next.js Docker example
- **Self-hosted**: Run `npm run build && npm start`

## 📝 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme.

### Content

Update the content in each component file in the `components/` directory.

### Animations

Modify animations in `app/globals.css` under the `@layer utilities` section.

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Copyright © 2024 Hypeon.ai

## 🤝 Support

For questions or support, contact the Hypeon.ai team.
