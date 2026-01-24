import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voice.hypeon.ai - AI Voice Receptionist that Books Appointments 24/7",
  description: "Never miss another booking. Your AI receptionist answers every call instantly, speaks naturally, and books appointments on the spot.",
  keywords: "AI receptionist, voice AI, appointment booking, automated receptionist, business phone system",
  authors: [{ name: "Hypeon.ai" }],
  creator: "Hypeon.ai",
  publisher: "Hypeon.ai",
  metadataBase: new URL('https://voice.hypeon.ai'),
  openGraph: {
    title: "Voice.hypeon.ai - AI Voice Receptionist",
    description: "Every call answered. Every booking captured. Even when you're busy, closed, or short-staffed.",
    type: "website",
    url: 'https://voice.hypeon.ai',
    siteName: "Voice.hypeon.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice.hypeon.ai - AI Voice Receptionist",
    description: "Every call answered. Every booking captured. Even when you're busy, closed, or short-staffed.",
    creator: "@hypeon_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
