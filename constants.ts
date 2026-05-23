import { 
  ShieldCheck, 
  Leaf, 
  Lightbulb, 
  Users, 
  Award, 
  Drill, 
  Factory, 
  Anchor, 
  TrendingUp, 
  Zap,
  Building2,
  Wrench,
  FlaskConical,
  ClipboardCheck,
  HardHat
} from 'lucide-react';
import { NavItem, ServiceItem, ValueItem, GrowthGoal } from './types';

export const COMPANY_NAME = "Verte Energies Limited";
export const TAGLINE = "Integrated energy, engineering, and infrastructure solutions delivered with discipline.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const TEAM_MEMBERS = [
  {
    name: "Anthony Nwachukwu Nwokoro",
    role: "CHAIRMAN / CHIEF EXECUTIVE OFFICER (CEO)",
    image: "/images/team/Anthony Nwachukwu Nwokoro.png",
    bio: "A seasoned energy executive with extensive experience in oil and gas, engineering, and infrastructure development."
  },
  {
    name: "Olusayo Ademola Ajayi",
    role: "NON-EXECUTIVE DIRECTOR",
    image: "/images/team/olusayonon executive director.png",
    bio: "A chartered engineer and project management expert with a track record in major EPCM projects."
  },
  {
    name: "Felix Radizi",
    role: "NON-EXECUTIVE DIRECTOR",
    image: "/images/team/felix.png",
    bio: "Expert in operations management, fabrication, and technical support for energy projects."
  },
  {
    name: "Ebele Ndukwe Radizi",
    role: "COMPANY SECRETARY/CHIEF LEGAL OFFICER",
    image: "/images/team/Ebele company sec.png",
    bio: "Specialist in corporate governance, compliance, and stakeholder engagement."
  },
  {
    name: "Adebola Evelyn Owede",
    role: "NON-EXECUTIVE DIRECTOR",
    image: "/images/team/adebola chief finance.png",
    bio: "Finance professional with expertise in financial management and strategic planning."
  }
];

export const CORE_VALUES: ValueItem[] = [
  { title: "Safety", description: "Disciplined project delivery with health, safety, and environmental controls built into every phase.", icon: ShieldCheck },
  { title: "Integrity", description: "Transparent decisions, accountable execution, and clear communication with clients and regulators.", icon: Award },
  { title: "Sustainability", description: "Long-term value creation that respects communities, assets, and the environment.", icon: Leaf },
  { title: "Innovation", description: "Practical technology adoption that improves reliability, cost control, and project outcomes.", icon: Lightbulb },
  { title: "Stakeholder Value", description: "Commercial and social value for clients, partners, host communities, and employees.", icon: Users },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Oil & Gas Services",
    icon: Drill,
    image: "/images/services/upstream.jpg",
    items: [
      "Pipeline construction, inspection, and surveillance",
      "Pipeline integrity management, cleaning, and corrosion protection",
      "Safety and process control equipment installation and calibration",
      "Facility design, fabrication, commissioning, and production support"
    ]
  },
  {
    title: "EPCM & Project Management",
    icon: HardHat,
    image: "/images/services/engineering.jpg",
    items: [
      "Development concept engineering",
      "Project execution planning and capital project management",
      "FEED and detailed engineering management",
      "Independent project reviews, assurance, and owner's team support"
    ]
  },
  {
    title: "Civil & Structural Engineering",
    icon: Building2,
    image: "/images/services/engineering.png",
    items: [
      "Feasibility studies and detailed engineering design",
      "Earthworks, piling, and foundation construction",
      "Roads, bridges, culverts, and drainage networks",
      "Industrial buildings, reinforced concrete, and steel structures"
    ]
  },
  {
    title: "Fabrication & Mechanical Works",
    icon: Wrench,
    image: "/images/services/engineering1.jpg",
    items: [
      "Steel structure fabrication and onsite assembly",
      "Structural modification and mechanical integrity restoration",
      "Piping, rigging, and equipment alignment",
      "Tank cleaning, testing, coating, and pressure vessel works"
    ]
  },
  {
    title: "Procurement & Technical Support",
    icon: ClipboardCheck,
    image: "/images/services/midstream.jpg",
    items: [
      "Procurement of certified equipment, instruments, and spare parts",
      "Global sourcing and vendor coordination",
      "Transport logistics and warehousing for project equipment",
      "Quality assurance, documentation, and certification management"
    ]
  },
  {
    title: "Marine Audit & Inspection",
    icon: Anchor,
    image: "/images/services/upstream.jpg",
    items: [
      "Marine audits, vetting, and ISM/ISPS inspections",
      "Cargo quality control and supercargo services",
      "Vessel condition, valuation, and draft surveys",
      "Hull, machinery, bunker, discharge, and bulk loading inspections"
    ]
  },
  {
    title: "Laboratory & Testing Services",
    icon: FlaskConical,
    image: "/images/services/engineering.png",
    items: [
      "Chemical composition and performance analysis",
      "Quality testing of petroleum products",
      "Environmental sampling and contamination control",
      "Research and development in petroleum chemistry"
    ]
  }
];

export const GROWTH_GOALS: GrowthGoal[] = [
  {
    period: "Current Position",
    title: "Indigenous Platform",
    description: "Registered Nigerian energy and engineering company with capabilities across oil, gas, procurement, inspection, and infrastructure delivery.",
    icon: ShieldCheck
  },
  {
    period: "2025-2027",
    title: "Execution Growth",
    description: "Deepen delivery capacity in EPCM, LPG infrastructure, marine inspection, and technical support partnerships.",
    icon: TrendingUp
  },
  {
    period: "2028-2030",
    title: "Sustainable Scale",
    description: "Build systems, partnerships, and technical depth that support regional growth and cleaner energy infrastructure.",
    icon: Zap
  }
];

export const CONTACT_INFO = {
  offices: [
    {
      label: "Head Office, Abuja",
      address: "Qualitrend Residence 1003, Bala Muhammed Way, Guzape, Abuja."
    },
    {
      label: "Lagos Office",
      address: "17 Amodu Tijani Close, Victoria Island, Lagos."
    },
    {
      label: "Enugu Office",
      address: "Plot C 14 & 15 Old Airport Road, Emene, Enugu State."
    }
  ],
  phone: "+234 806 388 5724",
  phones: ["+234 806 388 5724", "+234 803 321 4867"],
  email: "info@verteenergies.com",
  website: "www.verteenergies.com"
};
