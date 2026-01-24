# Book Demo Feature Setup

## Overview

The "Book Demo" feature includes a popup modal form that collects user information and sends it via email to yash@hypeon.ai using Gmail SMTP with nodemailer.

## Features

✅ Beautiful popup modal with smooth animations
✅ Form validation (required fields: name, email, phone)
✅ Success/error states with visual feedback
✅ Email notifications sent to yash@hypeon.ai via Gmail
✅ Reply-to functionality (emails can be replied to directly)
✅ Loading states during submission
✅ Mobile responsive design
✅ HTML formatted emails with professional styling

## Setup Instructions

### 1. Enable Gmail App Passwords

Since this uses Gmail SMTP, you need to create an **App Password** (not your regular Gmail password):

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go back to Security → **App passwords**
5. Select app: **Mail**
6. Select device: **Other (Custom name)** → Enter "Voice Hypeon"
7. Click **Generate**
8. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

**Important:** Save this password - you won't be able to see it again!

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Gmail credentials to `.env.local`:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=abcdefghijklmnop
   ```

   Replace:
   - `your-email@gmail.com` with the Gmail account you want to send FROM
   - `abcdefghijklmnop` with your 16-character app password (remove spaces)

### 3. Important Notes

- ✅ **FREE** - No cost, uses your Gmail account
- ✅ **Secure** - App passwords are safer than using your main password
- ✅ **Reliable** - Gmail SMTP is highly reliable
- ⚠️ **Limits** - Gmail has a sending limit of ~500 emails/day (more than enough!)
- ⚠️ **2FA Required** - You must have 2-Step Verification enabled on your Google account

## Testing Locally

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000)

3. Click any "Book Demo" button:
   - Navigation button
   - Hero section button
   - CTA section button

4. Fill out the form and submit

5. Check your email at yash@hypeon.ai

## Email Format

Emails sent to yash@hypeon.ai will be beautifully formatted in HTML with:

**HTML Version:**
- Professional gradient header with logo
- Organized contact information
- Clickable email and phone links
- Clean, modern design
- Responsive layout

**Plain Text Version (fallback):**
```
🎯 New Demo Request from [Name]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Contact Information:
   Name: [Name]
   Email: [Email]
   Phone: [Phone]
   Company: [Company]

💬 Message:
[Message content]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Submitted: [Date and Time]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to contact [Name].
```

## Components Modified

1. **BookDemoModal.tsx** (NEW)
   - Main popup modal component
   - Form handling and validation
   - API integration

2. **LandingPage.tsx**
   - Added modal state management
   - Pass `openModal` function to child components

3. **Navigation.tsx**
   - Added `onClick` handler to "Book Demo" button

4. **HeroSection.tsx**
   - Added `onClick` handler to "Book a Live Demo" button

5. **CTASection.tsx**
   - Added `onClick` handler to "Book a Live Demo" button

6. **globals.css**
   - Added animations for modal (fadeIn, slideUp)

7. **/app/api/book-demo/route.ts** (NEW)
   - API endpoint for handling form submissions
   - Nodemailer Gmail SMTP integration
   - HTML email formatting

## Troubleshooting

### Form submits but no email received

1. Check that `GMAIL_USER` and `GMAIL_APP_PASSWORD` are set in `.env.local`
2. Verify you're using an **App Password**, not your regular Gmail password
3. Ensure 2-Step Verification is enabled on your Google account
4. Check the terminal/console for error messages
5. Try testing with a different recipient email first

### "Failed to send" error

1. Verify your App Password is correct (16 characters, no spaces)
2. Make sure the Gmail account exists and is active
3. Check if you've hit Gmail's daily sending limit (~500 emails/day)
4. Ensure 2FA is enabled on your Google account
5. Try generating a new App Password

### "Invalid credentials" error

1. You must use an **App Password**, not your regular Gmail password
2. Remove any spaces from the app password
3. Make sure you copied the entire 16-character password
4. Generate a new app password if needed

### Modal doesn't open

1. Clear browser cache
2. Check browser console for JavaScript errors
3. Ensure all components are properly imported

## Gmail Sending Limits

- **500 emails per day** for regular Gmail accounts
- **2,000 emails per day** for Google Workspace accounts
- **Completely FREE** - no cost at all!
- No credit card required

## Security Notes

- ✅ App Password is stored in `.env.local` (not committed to git)
- ✅ API endpoint validates required fields
- ✅ Uses Gmail's secure SMTP servers
- ✅ Email addresses are validated client-side and server-side
- ✅ App Passwords can be revoked anytime from Google Account settings

## Production Deployment (Vercel)

1. Add environment variables in Vercel dashboard:
   - Go to your project → Settings → Environment Variables
   - Add: `GMAIL_USER` with your Gmail address
   - Add: `GMAIL_APP_PASSWORD` with your app password
   - Apply to Production, Preview, and Development

2. Redeploy your application

3. Test the form on your production site

## Alternative Email Services

If you prefer to use a different email service:

- **Outlook/Office 365**: Change service to `'hotmail'` or use SMTP settings
- **Custom SMTP**: Configure with host, port, and credentials
- **SendGrid/Mailgun**: Install their SDK and modify the route

Just update `/app/api/book-demo/route.ts` with your preferred service settings.

---

**Need help?** 
- [Google App Passwords Guide](https://support.google.com/accounts/answer/185833)
- [Nodemailer Documentation](https://nodemailer.com/)
- Contact the Hypeon.ai team
