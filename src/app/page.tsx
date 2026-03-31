
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Organizers } from '@/components/Organizers';
import { Domains } from '@/components/Domains';
import { Timeline } from '@/components/Timeline';
import { Prizes } from '@/components/Prizes';
import { Partners } from '@/components/Partners';
import { TeamCarousel } from '@/components/TeamCarousel';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { TEAM_MEMBERS } from '@/lib/data';
import TechPartner from '@/components/TechPartner';
import ChiefPatron from '@/components/ChiefPatron';
import { EmberParticles } from '@/components/EmberParticles';
import { QrCode } from '@/components/QrCode';
import CommunityPartner from '@/components/CommunityPartner';
import { Banner } from '@/components/Banner';
import { Gallery } from '@/components/Gallery';
import { Brocheur } from '@/components/Brocheur';
import Sponsor from '@/components/Sponsor';

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
       <div className="fixed inset-0 z-0 w-full">
          <EmberParticles />
        </div>
      <Navbar />
      <Hero />
      <About />
      <Domains />
      <Timeline />
      <Prizes />
      <Organizers />
      <TechPartner/>
      <CommunityPartner/>
      <Sponsor/>
      <div id="team">
        <TeamCarousel title="Organizing Team" members={TEAM_MEMBERS} />
      </div>
      <ChiefPatron/>
      {/* <Partners /> */}
      <QrCode/>
      {/* <Banner/> */}
      <Gallery />
      <Brocheur/>
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
