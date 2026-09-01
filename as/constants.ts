import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Clock,
  FlaskConical,
  Fuel,
  HeartHandshake,
  Leaf,
  PackageCheck,
  ShieldCheck,
  Ship,
  TrendingUp,
  Users,
  Wrench,
} from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about.html' },
  { label: 'Services', href: '/services.html' },
  { label: 'Projects', href: '#' },
  { label: 'Contact', href: '/contact.html' },
];

export const TEAM_MEMBERS = [
  {
    name: 'Anthony Nwachukwu Nwokoro',
    role: 'Chairman / Chief Executive Officer (CEO)',
    bio: 'A distinguished construction, infrastructure, and energy executive with over 25 years of experience in strategic leadership, operational excellence, and commercial delivery.',
    image: '/images/team/anthony-nwachukwu-nwokoro-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/nwokoro-nwachukwu-abbb314a',
  },
  {
    name: 'Olusayo Ajayi',
    role: 'Non-Executive Director',
    bio: 'A multiple award-winning project and engineering management executive with over 25 years of international oil and gas experience.',
    image: '/images/team/olusayo-ajayi-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/olusayo-ajayi',
  },
  {
    name: 'Adebola Evelyn Owede',
    role: 'Non-Executive Director',
    bio: 'A CFA Charterholder and senior finance professional with over 20 years of experience across treasury, capital markets, and strategic finance.',
    image: '/images/team/adebola-evelyn-owede-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/adebolaowede',
  },
  {
    name: 'Ebele Ndukwe Radizi',
    role: 'Company Secretary / Chief Legal Officer',
    bio: 'A seasoned legal and consulting professional with over 20 years of experience across legal practice, in-house advisory, and international development consulting.',
    image: '/images/team/ebele-ndukwe-radizi-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/ebele-ndukwe-radizi-96935736/',
  },
];

export const MANAGEMENT_MEMBERS = [
  {
    name: 'Collins Okaru',
    role: 'Chartered Engineer & Project Management Professional',
    bio: 'A Chartered Engineer, PMP, and energy leader with over 20 years of experience delivering offshore, subsea, infrastructure, and industrial automation projects worldwide.',
    image: '/images/team/collins-okaru-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/collinsokaru',
  },
  {
    name: 'Terngu Utim',
    role: 'Director (Commercial and New Business Development)',
    bio: 'A Houston-based development leader with extensive experience in commercial growth, petroleum geoscience, subsurface leadership, and new energy opportunities.',
    image: '/images/team/terngu-utim-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/ternguutim',
  },
  {
    name: 'Samson Onoh',
    role: 'GM, Projects & Operations Portfolio',
    bio: 'A COREN-registered engineer and PMP-certified portfolio leader managing projects, operations, delivery priorities, and performance for Verte Energies.',
    image: '/images/team/samson-onoh-brand-green.png',
    linkedIn: 'https://www.linkedin.com/in/samson-onoh-coren-pmp-8a0736366/',
  },
];

export const CORE_VALUES = [
  {
    title: 'Safety',
    description: 'We plan and execute work with safety controls that protect people, assets, and communities.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality',
    description: 'We apply disciplined standards so every deliverable is fit for purpose and traceable.',
    icon: BadgeCheck,
  },
  {
    title: 'Integrity',
    description: 'We keep commitments visible, communicate clearly, and make accountable project decisions.',
    icon: Users,
  },
  {
    title: 'Delivery',
    description: 'We align teams, materials, and schedules around practical execution on site.',
    icon: Clock,
  },
  {
    title: 'Sustainability',
    description: 'We support energy work with attention to long-term environmental and social impact.',
    icon: Leaf,
  },
];

export const SERVICES = [
  {
    title: 'Oil & Gas Services',
    icon: Fuel,
    image: '/images/services/upstream.jpg',
    items: [
      'Pipeline construction, inspection, and surveillance',
      'Pipeline integrity management, cleaning, and corrosion protection',
      'Safety and process control equipment installation and calibration',
      'Facility design, fabrication, commissioning, and production support',
    ],
  },
  {
    title: 'EPCM & Project Management',
    icon: ClipboardCheck,
    image: '/images/services/engineering.jpg',
    items: [
      'Development concept engineering',
      'Project execution planning and capital project management',
      'FEED and detailed engineering management',
      "Independent project reviews, assurance, and owner's team support",
    ],
  },
  {
    title: 'Civil & Structural Engineering',
    icon: Building2,
    image: '/images/services/engineering.png',
    items: [
      'Feasibility studies and detailed engineering design',
      'Earthworks, piling, and foundation construction',
      'Roads, bridges, culverts, and drainage networks',
      'Industrial buildings, reinforced concrete, and steel structures',
    ],
  },
  {
    title: 'Fabrication & Mechanical Works',
    icon: Wrench,
    image: '/images/services/engineering1.jpg',
    items: [
      'Steel structure fabrication and onsite assembly',
      'Structural modification and mechanical integrity restoration',
      'Piping, rigging, and equipment alignment',
      'Tank cleaning, testing, coating, and pressure vessel works',
    ],
  },
  {
    title: 'Procurement & Technical Support',
    icon: PackageCheck,
    image: '/images/services/midstream.jpg',
    items: [
      'Procurement of certified equipment, instruments, and spare parts',
      'Global sourcing and vendor coordination',
      'Transport logistics and warehousing for project equipment',
      'Quality assurance, documentation, and certification management',
    ],
  },
  {
    title: 'Marine Audit & Inspection',
    icon: Ship,
    image: '/images/services/upstream.jpg',
    items: [
      'Marine audits, vetting, and ISM/ISPS inspections',
      'Cargo quality control and supercargo services',
      'Vessel condition, valuation, and draft surveys',
      'Hull, machinery, bunker, discharge, and bulk loading inspections',
    ],
  },
  {
    title: 'Laboratory & Testing Services',
    icon: FlaskConical,
    image: '/images/services/engineering.png',
    items: [
      'Chemical composition and performance analysis',
      'Quality testing of petroleum products',
      'Environmental sampling and contamination control',
      'Research and development in petroleum chemistry',
    ],
  },
];

export const CONTACT_INFO = {
  offices: [
    {
      label: 'Head Office, Abuja',
      address: 'Qualitrend Residence 1003, Bala Muhammed Way, Guzape, Abuja.',
    },
    {
      label: 'Lagos Office',
      address: '17 Amodu Tijani Close, Victoria Island, Lagos.',
    },
    {
      label: 'Enugu Office',
      address: 'Plot C 14 & 15 Old Airport Road, Emene, Enugu State.',
    },
  ],
  phones: ['+234 806 388 5724', '+234 803 321 4867'],
  email: 'info@verteenergies.com',
  website: 'www.verte-energies.com',
};

export const GROWTH_GOALS = [
  {
    period: 'Near Term',
    title: 'Delivery Systems',
    description: 'Strengthen project controls, compliance routines, and field execution processes across service lines.',
    icon: ClipboardCheck,
  },
  {
    period: 'Mid Term',
    title: 'Strategic Partnerships',
    description: 'Build disciplined partnerships that expand technical depth, procurement access, and project capacity.',
    icon: HeartHandshake,
  },
  {
    period: 'Long Term',
    title: 'Sustainable Scale',
    description: 'Grow energy and infrastructure delivery with governance, local capacity, and measurable ESG practices.',
    icon: TrendingUp,
  },
];
