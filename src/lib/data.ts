
import { PlaceHolderImages } from './placeholder-images';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Organizers', href: '#organizers' },
  { name: 'Domains', href: '#domains' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Team', href: '#team' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const HERO_DATA = {
  title: 'MIND INSTALLERS HACKATHON 4.0',
  tagline: 'Unleash Your Innovation. Build the Future.',
  date: 'April 3-4, 2026',
  venue: 'IIMT College Of Engineering, Greater Noida',
  time: '30 Hr',
};

export const ABOUT_DATA = [
  {
    title: 'Our Vision',
    content: [
      'Empowering the next generation of innovators to solve real-world problems.',
      'Fostering a culture of collaborative building and technical excellence.',
      'Bridging the gap between academic theory and industry application.'
    ],
  },
  {
    title: 'What is MIH?',
    content: [
      'MIH is a premier 24-hour hackathon bringing together bright minds from across the country.',
      'Participants work in teams to prototype innovative solutions within specific domains.',
      'Supported by industry leaders and academic experts.'
    ],
  }
];

export const ORGANIZERS_DATA = [
  { name: 'IIMT', logo: '/iimt-logo.jpeg', type: 'organizer' },
  { name: 'IIIT Delhi', logo: '/logo.jpg', type: 'organizer' },
  { name: 'IIMT LBF', logo: '/iimt-blf.png', type: 'organizer' },
];
export const ORGANIZERS2 = { name: 'Botlab Dynamics', logo: '/botlab.jpeg', type: 'tech-partner' };

export const DOMAINS = [
  { name: 'AI/ML', icon: '🤖' },
  { name: 'Web3', icon: '🌐' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Sustainability', icon: '🌿' },
  { name: 'EdTech', icon: '🎓' },
  { name: 'Cybersecurity', icon: '🛡️' },
  { name: 'IoT/Robotics', icon: '🔌' },
  { name: 'Web/Android', icon: '📱' },
  { name: 'Drone Tech', icon: '🚁' },
];

export const TIMELINE = [
  { date: 'Feb 20', event: 'Registration Starts', description: 'Early bird registrations open for teams.' },
  { date: 'March 18', event: 'Proposal Submission', description: 'Abstract submission deadline for project ideas.' },
  { date: 'March 22', event: 'Shortlisting', description: 'Announcement of teams selected for the final round.' },
  { date: 'March 25-26', event: 'Online Round', description: 'Arrival at venue and start of the 24-hour sprint.' },
  { date: 'April 3', event: 'Grand Finale', description: 'Arrival at venue and start of the 24-hour sprint.' },
  { date: 'April 4', event: 'Award Ceremony', description: 'Winner announcements and prize distribution.' },
];

export const PRIZES = [
  { rank: '1st Prize', amount: '₹1,00,000', perks: ['Gold Trophy', 'Swag Kits', 'Internship Opportunity'] },
  { rank: '2nd Prize', amount: '₹50,000', perks: ['Silver Trophy', 'Swag Kits', 'Cloud Credits'] },
  { rank: '3rd Prize', amount: '₹25,000', perks: ['Bronze Trophy', 'Swag Kits', 'Certificate of Merit'] },
];

export const PARTNERS = [
  { name: 'DigitalOcean', logo: PlaceHolderImages.find(img => img.id === 'partner-digitalocean')?.imageUrl || '' },
  { name: 'Vercel', logo: PlaceHolderImages.find(img => img.id === 'partner-vercel')?.imageUrl || '' },
  { name: 'Botlab', logo: PlaceHolderImages.find(img => img.id === 'organizer-botlab')?.imageUrl || '' },
  { name: 'IIMT BF', logo: PlaceHolderImages.find(img => img.id === 'organizer-iimt')?.imageUrl || '' },
];

export const TEAM_MEMBERS = [
  { name: 'Harshit', role: 'Team lead', image: '/harshit.jpeg' },
  { name: 'Jagriti', role: 'Team lead', image:'/jagriti.jpeg' },
  { name: 'Shekhar', role: 'Technical lead', image: '/shekhar.png' },
  { name: 'Ujjwal Katiyar', role: 'Technical lead', image: '/ujjwal.jpeg' },
  { name: 'Anshika Singh', role: 'Design lead', image: '/anshika.jpeg' },
  { name: 'Harsh Vardhan', role: 'Design lead', image:'/harsh.jpeg' },
  { name: 'Khushi', role: 'Event management lead', image:'/khushi.jpeg' },
  { name: 'Chirag', role: 'Content lead', image:'/chirag.jpeg' },
  { name: 'Kunal', role: 'Content lead', image:'/kunal.jpeg' },
  { name: 'Shashank', role: 'Sponsorship lead', image:'/shashank.jpeg' },
  { name: 'Prakshi', role: 'Sponsorship lead', image:'/prakshi.jpeg' },
  { name: 'Naveen', role: 'Sponsorship lead', image:'/naveen.jpeg' },
  { name: 'Vibhashu', role: 'Sponsorship lead', image:'/vibhashu.jpeg' },
  { name: 'Abhinav', role: 'Pr lead', image:'/Abhinav.jpeg' },
  
];

export const FAQ_ITEMS = [
  { question: 'Who can participate?', answer: 'Anyone currently enrolled in an undergraduate or postgraduate program can participate.' },
  { question: 'What is the team size?', answer: 'Teams can have 2 to 4 members.' },
  { question: 'Is there a registration fee?', answer: 'There is no registration fee for first round. The teams selected in first round have to pay 100/- of each member for final round' },
  { question: 'Will travel be reimbursed?', answer: 'No, travelling reimbursement' },
  { question: 'What should I bring?', answer: 'Your laptop, chargers, and any hardware you need for your project.' },
];

export const CONTACT_INFO = {
  email: 'iimthackathon_gn@gmail.com | pragya4491_gn@iimtindia.net ',
  phone: '+91 9839229905 | +91 89579 87040 ',
  address: 'IIMT College Of Engineering, Knowledge Park III, Greater Noida, UP',
  socials: {
    twitter: 'https://x.com/iimtnoida',
    instagram: 'https://www.instagram.com/iimtindia/',
    linkedin: 'https://www.linkedin.com/school/iimt-group-colleges/'
  }
};
