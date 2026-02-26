
import type {Metadata} from 'next';
import './globals.css';
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: 'MIH 4.0 | Mind Installers Hackathon',
  description: 'Join the ultimate 24-hour hackathon at IIMT College Of Engineering.',
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
      </head>
      <body className="font-body antialiased bg-black text-white selection:bg-primary selection:text-white">
      <Analytics/>
        {children}
      </body>
    </html>
  );
}
