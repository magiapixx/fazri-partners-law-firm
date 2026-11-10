import columns from "@/assets/practice-columns.jpg";
import stairs from "@/assets/practice-stairs.jpg";
import glass from "@/assets/practice-glass.jpg";
import boardroom from "@/assets/boardroom.jpg";
import handshake from "@/assets/handshake.jpg";
import skyline from "@/assets/jakarta-skyline.jpg";
import fazri from "@/assets/team-fazri.jpg";
import anindya from "@/assets/team-anindya.jpg";
import raka from "@/assets/team-raka.jpg";
import sekar from "@/assets/team-sekar.jpg";

export const firm = {
  name: "Fazri & Partners",
  tagline: "Counsel with Conviction",
  email: "counsel@fazripartners.com",
  phone: "+62 21 5080 1188",
  address: "Sequis Tower, 28th Floor, Jl. Jend. Sudirman Kav. 71, Jakarta 12190",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/what-we-do", label: "What We Do" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/insight", label: "Insight" },
] as const;

export type Practice = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  services: string[];
};

export const practices: Practice[] = [
  {
    slug: "corporate",
    title: "Corporate & M&A",
    image: columns,
    summary:
      "Structuring, negotiating and closing transactions that reshape businesses — from foreign direct investment to cross-border acquisitions.",
    services: [
      "Mergers & acquisitions",
      "Foreign direct investment (PMA)",
      "Joint ventures",
      "Corporate restructuring",
      "Shareholder agreements",
    ],
  },
  {
    slug: "disputes",
    title: "Litigation & Disputes",
    image: stairs,
    summary:
      "Measured advocacy before Indonesian courts, BANI and international tribunals, built on preparation and an instinct for resolution.",
    services: [
      "Commercial litigation",
      "Domestic & international arbitration",
      "Bankruptcy & PKPU",
      "White-collar defence",
      "Enforcement of awards",
    ],
  },
  {
    slug: "finance",
    title: "Banking & Finance",
    image: glass,
    summary:
      "Advising lenders, sponsors and borrowers on financings, capital markets offerings and regulatory obligations under OJK and Bank Indonesia.",
    services: [
      "Syndicated & project finance",
      "Capital markets & IPOs",
      "Islamic finance",
      "Fintech regulation",
      "Debt restructuring",
    ],
  },
  {
    slug: "real-estate",
    title: "Real Estate & Infrastructure",
    image: handshake,
    summary:
      "Land acquisition, development and infrastructure work across the archipelago, from title due diligence to public–private partnerships.",
    services: [
      "Land title & due diligence",
      "Property development",
      "PPP & infrastructure",
      "Construction contracts",
      "Energy & natural resources",
    ],
  },
];

export const expertise = [
  {
    group: "Business",
    items: ["Corporate Governance", "Competition & Antitrust", "Employment", "Tax Advisory", "Intellectual Property"],
  },
  {
    group: "Regulatory",
    items: ["Licensing & Permits", "Data Protection (PDP Law)", "Anti-Corruption", "Customs & Trade", "Environmental"],
  },
  {
    group: "Private Client",
    items: ["Family Wealth", "Succession Planning", "Trusts & Estates", "Family Business Disputes", "Philanthropy"],
  },
];

export const stats = [
  { label: "Transactions advised", value: "Rp 48T+" },
  { label: "Years of practice", value: "22" },
  { label: "Lawyers & specialists", value: "60+" },
  { label: "Cases resolved", value: "1,200+" },
];

export type Person = { name: string; role: string; image: string; focus: string };

export const team: Person[] = [
  { name: "Fazri Ramadhan", role: "Founding & Managing Partner", image: fazri, focus: "Corporate & M&A" },
  { name: "Anindya Kusuma", role: "Senior Partner", image: anindya, focus: "Litigation & Arbitration" },
  { name: "Sekar Wulandari", role: "Partner", image: sekar, focus: "Banking & Islamic Finance" },
  { name: "Raka Pratama", role: "Partner", image: raka, focus: "Real Estate & Infrastructure" },
];

export type CaseStudy = {
  slug: string;
  practice: string;
  title: string;
  client: string;
  outcome: string;
  summary: string;
  image: string;
  year: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-telecom-acquisition",
    practice: "Corporate & M&A",
    title: "Guiding a US$420m acquisition of a regional telecom operator",
    client: "Southeast Asian infrastructure fund",
    outcome: "Closed in 7 months with full regulatory clearance",
    summary:
      "We led due diligence, KPPU merger filing and negotiations across three jurisdictions, securing approval without remedies.",
    image: glass,
    year: "2025",
  },
  {
    slug: "bani-construction-award",
    practice: "Litigation & Disputes",
    title: "Securing a full award in a Rp 1.3 trillion construction arbitration",
    client: "National EPC contractor",
    outcome: "100% of claim awarded plus costs",
    summary:
      "Representing the contractor before BANI over delay and variation claims on a toll-road project, followed by successful enforcement.",
    image: stairs,
    year: "2024",
  },
  {
    slug: "sukuk-programme",
    practice: "Banking & Finance",
    title: "Structuring a debut green sukuk programme",
    client: "Listed renewable energy company",
    outcome: "Oversubscribed 2.4× on issuance",
    summary:
      "Drafted the programme documentation, coordinated with DSN-MUI and OJK, and aligned the structure with green taxonomy standards.",
    image: columns,
    year: "2024",
  },
  {
    slug: "industrial-estate-land",
    practice: "Real Estate & Infrastructure",
    title: "Consolidating 1,100 hectares for an industrial estate",
    client: "Japanese–Indonesian joint venture",
    outcome: "Clean title across 2,300 land parcels",
    summary:
      "A multi-year land acquisition programme in Central Java, resolving overlapping claims and securing spatial-planning approvals.",
    image: skyline,
    year: "2023",
  },
  {
    slug: "family-business-succession",
    practice: "Corporate & M&A",
    title: "Resolving a three-generation family business succession",
    client: "Family-owned FMCG group",
    outcome: "Settled privately, without court proceedings",
    summary:
      "Mediated shareholder tensions and restructured holdings into a governance framework accepted by all branches of the family.",
    image: boardroom,
    year: "2023",
  },
  {
    slug: "pkpu-restructuring",
    practice: "Litigation & Disputes",
    title: "Defending a manufacturer through PKPU proceedings",
    client: "Textile manufacturer, 4,000 employees",
    outcome: "Composition plan approved, operations preserved",
    summary:
      "Negotiated with 140 creditors to secure a court-ratified restructuring plan that kept the business — and its workforce — intact.",
    image: handshake,
    year: "2022",
  },
];

export type Insight = {
  slug: string;
  category: "Analysis" | "Firm News" | "Regulatory Update";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
};

export const insights: Insight[] = [
  {
    slug: "omnibus-investment-2026",
    category: "Analysis",
    title: "What the 2026 Positive Investment List means for foreign investors",
    excerpt:
      "New sectors are opening to full foreign ownership. We unpack the opportunities — and the licensing traps that remain.",
    date: "Nov 4, 2026",
    readTime: "8 min read",
    image: skyline,
    author: "Fazri Ramadhan",
  },
  {
    slug: "pdp-law-enforcement",
    category: "Regulatory Update",
    title: "The PDP Law two years on: enforcement priorities for boards",
    excerpt:
      "With the data protection authority now active, compliance has become a board-level matter. Here is where to start.",
    date: "Oct 21, 2026",
    readTime: "6 min read",
    image: glass,
    author: "Sekar Wulandari",
  },
  {
    slug: "anindya-senior-partner",
    category: "Firm News",
    title: "Anindya Kusuma named Senior Partner",
    excerpt:
      "Anindya will lead the firm's growing disputes practice, following a record year of arbitration mandates.",
    date: "Oct 2, 2026",
    readTime: "3 min read",
    image: boardroom,
    author: "Fazri & Partners",
  },
  {
    slug: "arbitration-seat-jakarta",
    category: "Analysis",
    title: "Choosing Jakarta as an arbitral seat: myths and realities",
    excerpt:
      "Recent Supreme Court decisions suggest Indonesian courts are becoming more arbitration-friendly. The data tells the story.",
    date: "Sep 15, 2026",
    readTime: "10 min read",
    image: columns,
    author: "Anindya Kusuma",
  },
  {
    slug: "green-sukuk-guide",
    category: "Regulatory Update",
    title: "A practical guide to OJK's green sukuk framework",
    excerpt:
      "Eligibility, use-of-proceeds reporting and the role of external reviewers — a checklist for first-time issuers.",
    date: "Aug 28, 2026",
    readTime: "7 min read",
    image: handshake,
    author: "Sekar Wulandari",
  },
  {
    slug: "land-bank-reform",
    category: "Analysis",
    title: "Land Bank reform and the future of large-scale acquisitions",
    excerpt:
      "How the Badan Bank Tanah is changing the way developers secure land — and what investors should watch.",
    date: "Aug 9, 2026",
    readTime: "9 min read",
    image: stairs,
    author: "Raka Pratama",
  },
];

export const testimonials = [
  {
    quote:
      "Fazri & Partners understood our business before they advised on it. Their judgement under pressure was the difference in closing the deal.",
    name: "Chief Executive",
    company: "Regional infrastructure fund",
  },
  {
    quote:
      "Calm, exacting and always one step ahead. They turned a dispute we feared into a result we are proud of.",
    name: "General Counsel",
    company: "National EPC contractor",
  },
];
