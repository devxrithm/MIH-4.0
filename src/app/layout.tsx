
import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'MIH 4.0 | Mind Installers Hackathon | IIMT College of Engineering | Unstop',
  description: 'Join Mind Installers Hackathon 4.0 (MIH 4.0), a national-level 30-hour offline hackathon hosted by IIMT College of Engineering, Greater Noida. Register your team on Unstop and compete to build groundbreaking tech solutions. The event includes a PPT submission round, an online pitch, and a grand offline finale. Showcase your skills, win prizes, and network with experts. Open to all college students.',
  keywords: ['MIH 4.0', 'Mind Installers Hackathon', 'IIMT College of Engineering', 'Hackathon', 'Offline Hackathon', 'Coding Marathon', 'Greater Noida', 'Tech Solutions', 'Unstop', 'hackathon registration', 'offline hackathon Greater Noida', 'engineering hackathon', 'national level hackathon'],
  openGraph: {
    title: 'MIH 4.0 | Mind Installers Hackathon | IIMT College of Engineering | Unstop',
    description: 'Register now for Mind Installers Hackathon 4.0 (MIH 4.0) on Unstop! A national-level offline hackathon by IIMT College of Engineering, Greater Noida. Join us for 30 hours of coding, innovation, and fun.',
    images: [
      {
        url: 'https://mih-4-0.vercel.app/mih.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mind Installers Hackathon 4.0',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="YMfN5M6ukPf4IPO_k-XpQchH14rv_O4bNuM_NDRTtIg" />
      </head>
      <body className="font-body antialiased bg-black text-white selection:bg-primary selection:text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
