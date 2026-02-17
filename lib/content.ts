// Content for A&J Virtual Assistance Services — edit all copy here.

export type IconKey =
  | "headphones"
  | "users"
  | "megaphone"
  | "target"
  | "book-open"
  | "shopping-cart"
  | "phone"
  | "mail"
  | "map-pin"
  | "check-circle"
  | "briefcase"
  | "message-circle"
  | "trending-up"
  | "shield"
  | "heart"
  | "handshake"
  | "calendar"
  | "file-text"
  | "layout"
  | "bar-chart";

export interface NavItem {
  label: string;
  href: string;
}

export interface HomeHero {
  headline: string;
  subheadline: string;
  primaryCta: string;
  primaryCtaHref: string;
  secondaryCta: string;
  secondaryCtaHref: string;
  backgroundImage?: string;
  backgroundVideo?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About Us", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "For VAs", href: "/for-vas" },
  { label: "Contact", href: "/contact" },
];

// ——— HOME ———
export const home: {
  hero: HomeHero;
  trustRow: string[];
  servicesOverview: { title: string; description: string; icon: IconKey }[];
  howItWorksSteps: { title: string; description: string }[];
  missionBanner: { title: string; description: string; cta: string; ctaHref: string };
  featuredTestimonials: number[];
  finalCta: { title: string; subtitle: string; buttonText: string; buttonHref: string };
} = {
  hero: {
    headline: "Scale faster with highly skilled Filipino Virtual Assistants.",
    subheadline:
      "We streamline your operations, boost productivity, and help you scale effectively—so you can focus on what matters most.",
    primaryCta: "Book a Free Consultation",
    primaryCtaHref: "/contact",
    secondaryCta: "Explore Services",
    secondaryCtaHref: "/services",
    // Optional: set one of these to add a background. Video takes precedence if both are set.
    backgroundImage: "/hero-bg.jpg",
    // backgroundVideo: "/hero-bg.mp4",
  },
  trustRow: ["Reliable", "Trained", "Confidential", "Long-term"],
  servicesOverview: [
    {
      title: "Admin & Executive Support",
      description: "Calendar management, email handling, travel arrangements, and day-to-day operations.",
      icon: "briefcase" as IconKey,
    },
    {
      title: "Customer Support",
      description: "Inbox management, ticket handling, and professional client communication.",
      icon: "headphones" as IconKey,
    },
    {
      title: "Social Media Management",
      description: "Content scheduling, engagement, and brand presence across platforms.",
      icon: "megaphone" as IconKey,
    },
    {
      title: "Lead Generation & Outreach",
      description: "Research, cold outreach, and pipeline support for your sales process.",
      icon: "target" as IconKey,
    },
    {
      title: "Bookkeeping Support",
      description: "Basic bookkeeping, expense tracking, and financial record-keeping.",
      icon: "book-open" as IconKey,
    },
    {
      title: "E-commerce Support",
      description: "Order processing, inventory updates, and store administration.",
      icon: "shopping-cart" as IconKey,
    },
  ],
  howItWorksSteps: [
    {
      title: "Discovery & matching",
      description: "We learn your needs and match you with a VA whose skills and experience fit.",
    },
    {
      title: "Onboarding & tools",
      description: "We set up communication, workflows, and tools so your VA can start strong.",
    },
    {
      title: "Ongoing support",
      description: "Regular check-ins and performance reviews keep everything on track.",
    },
  ],
  missionBanner: {
    title: "We also mentor aspiring Filipino Virtual Assistants.",
    description:
      "A&J is committed to training and creating opportunities for talented professionals in the Philippines. When you work with us, you support that mission.",
    cta: "Learn about our VA program",
    ctaHref: "/for-vas",
  },
  featuredTestimonials: [1, 2, 3], // indices into testimonials list
  finalCta: {
    title: "Ready to scale with a dedicated VA?",
    subtitle: "Tell us about your needs and we’ll find the right fit.",
    buttonText: "Get in touch",
    buttonHref: "/contact",
  },
};

// ——— SERVICES ———
export const servicesPage = {
  title: "Services",
  subtitle: "We offer flexible support across the areas that matter most to growing teams.",
  categories: [
    {
      title: "Admin & Executive Support",
      shortDescription: "Keep operations running smoothly so you can focus on strategy.",
      icon: "briefcase" as IconKey,
      included: [
        "Calendar and schedule management",
        "Email triage and drafting",
        "Travel and logistics",
        "Document preparation and filing",
        "Meeting prep and follow-up",
      ],
      bestFor: "Executives, founders, and busy professionals who need a right-hand person.",
      sampleTasks: [
        "Manage calendar and schedule meetings",
        "Draft and send professional emails",
        "Book travel and accommodations",
        "Prepare agendas and take meeting notes",
      ],
    },
    {
      title: "Customer Support",
      shortDescription: "Consistent, professional communication that reflects your brand.",
      icon: "headphones" as IconKey,
      included: [
        "Inbox and ticket management",
        "Response templates and escalation rules",
        "Customer follow-up and satisfaction checks",
        "Basic troubleshooting and FAQ handling",
      ],
      bestFor: "Small teams and solopreneurs who want reliable support without hiring in-house.",
      sampleTasks: [
        "Reply to customer emails and tickets",
        "Update help center articles",
        "Escalate complex issues with clear handoff",
        "Track and report on support metrics",
      ],
    },
    {
      title: "Social Media Management",
      shortDescription: "Maintain a strong, consistent presence without doing it yourself.",
      icon: "megaphone" as IconKey,
      included: [
        "Content planning and calendar",
        "Posting and scheduling",
        "Community engagement and comments",
        "Simple reporting and insights",
      ],
      bestFor: "Business owners and marketing leads who want visibility without the daily grind.",
      sampleTasks: [
        "Schedule posts across platforms",
        "Respond to comments and DMs",
        "Draft captions and source visuals",
        "Compile monthly engagement reports",
      ],
    },
    {
      title: "Lead Generation & Outreach",
      shortDescription: "Fill your pipeline with researched leads and structured outreach.",
      icon: "target" as IconKey,
      included: [
        "Lead research and list building",
        "Email and LinkedIn outreach",
        "CRM data entry and updates",
        "Follow-up sequences and tracking",
      ],
      bestFor: "Sales teams and coaches who need more qualified leads without extra headcount.",
      sampleTasks: [
        "Research and qualify leads",
        "Send personalized outreach sequences",
        "Update CRM and pipeline stages",
        "Schedule discovery calls",
      ],
    },
    {
      title: "Bookkeeping Support (basic)",
      shortDescription: "Organized records and basic bookkeeping so you stay compliant and informed.",
      icon: "book-open" as IconKey,
      included: [
        "Expense categorization and data entry",
        "Invoice creation and tracking",
        "Bank and credit card reconciliation support",
        "Reports for your accountant",
      ],
      bestFor: "Small businesses and freelancers who need order without a full-time bookkeeper.",
      sampleTasks: [
        "Categorize expenses in your software",
        "Create and send invoices",
        "Reconcile accounts with guidance",
        "Prepare monthly summary reports",
      ],
    },
    {
      title: "E-commerce Support",
      shortDescription: "Keep your store running smoothly from orders to listings.",
      icon: "shopping-cart" as IconKey,
      included: [
        "Order processing and fulfillment coordination",
        "Inventory and listing updates",
        "Customer order inquiries",
        "Basic store admin and reporting",
      ],
      bestFor: "E-commerce sellers who want to scale without hiring a full operations team.",
      sampleTasks: [
        "Process orders and coordinate shipping",
        "Update product listings and inventory",
        "Handle order-related customer messages",
        "Export sales and inventory reports",
      ],
    },
  ],
  packages: [
    {
      name: "Starter",
      hoursOrRole: "10–20 hours/week or part-time role",
      bestFor: "Solopreneurs and small teams testing VA support.",
      note: "Let’s tailor this to your needs.",
    },
    {
      name: "Growth",
      hoursOrRole: "20–40 hours/week or dedicated VA",
      bestFor: "Growing businesses ready for consistent, dedicated support.",
      note: "Let’s tailor this to your needs.",
    },
    {
      name: "Scale",
      hoursOrRole: "40+ hours or multiple VAs",
      bestFor: "Teams scaling operations and need coverage across functions.",
      note: "Let’s tailor this to your needs.",
    },
  ],
};

// ——— HOW IT WORKS ———
export const howItWorksPage = {
  title: "How Virtual Assistance Works",
  subtitle: "What a VA is, how we work with you, and what to expect.",
  whatIsVA: {
    title: "What is a Virtual Assistant?",
    content: `A Virtual Assistant (VA) is a skilled professional who works remotely to support your business—handling administrative, creative, or operational tasks so you can focus on growth and strategy. VAs can manage calendars, email, customer support, social media, lead generation, bookkeeping, and more, depending on your needs.

At A&J, our VAs are based in the Philippines and are trained in communication, tools, and best practices. We match you with someone whose skills and experience align with your goals, then support both of you with clear processes and ongoing check-ins.`,
  },
  steps: [
    {
      title: "Discovery call & needs assessment",
      description:
        "We learn about your business, pain points, and what success looks like. This helps us define the role and match you with the right VA.",
    },
    {
      title: "VA matching & onboarding",
      description:
        "We introduce you to your VA and align on responsibilities, hours, and communication. We handle contracts and expectations so everyone starts on the same page.",
    },
    {
      title: "Tools & workflows setup",
      description:
        "We set up the tools you use (email, project management, CRM, etc.) and document workflows so your VA can work effectively from day one.",
    },
    {
      title: "Ongoing management & performance check-ins",
      description:
        "We stay in the loop with regular check-ins and performance reviews. If anything needs to change, we adjust quickly.",
    },
  ],
  taskCategories: {
    title: "What tasks can a VA do?",
    tabs: [
      {
        key: "admin",
        label: "Admin",
        tasks: [
          "Calendar and schedule management",
          "Email triage and drafting",
          "Travel booking",
          "Document prep and filing",
          "Meeting prep and notes",
          "Data entry and spreadsheets",
        ],
      },
      {
        key: "support",
        label: "Support",
        tasks: [
          "Customer email and ticket replies",
          "Live chat and DM handling",
          "Order and inquiry follow-up",
          "FAQ and basic troubleshooting",
          "Feedback and review management",
        ],
      },
      {
        key: "marketing",
        label: "Marketing",
        tasks: [
          "Social media scheduling and posting",
          "Content calendar and captions",
          "Community engagement",
          "Simple graphic and asset coordination",
          "Email marketing support",
          "Basic analytics and reporting",
        ],
      },
      {
        key: "sales",
        label: "Sales",
        tasks: [
          "Lead research and list building",
          "Cold email and LinkedIn outreach",
          "CRM data entry and updates",
          "Follow-up sequences",
          "Meeting scheduling and prep",
          "Pipeline reporting",
        ],
      },
    ],
  },
  tools: [
    { name: "Google Workspace", icon: "layout" as IconKey },
    { name: "Microsoft 365", icon: "file-text" as IconKey },
    { name: "Slack", icon: "message-circle" as IconKey },
    { name: "Trello / Asana", icon: "check-circle" as IconKey },
    { name: "HubSpot", icon: "target" as IconKey },
    { name: "Calendly", icon: "calendar" as IconKey },
    { name: "QuickBooks / Xero", icon: "bar-chart" as IconKey },
  ],
  faq: [
    {
      question: "How does pricing work?",
      answer:
        "We offer flexible arrangements based on hours per week or dedicated roles. Pricing depends on scope, complexity, and level of experience. Book a free consultation and we’ll provide a tailored proposal.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "We use NDAs and clear confidentiality terms. Our VAs are trained on data handling and work only within agreed tools and access. We take security and privacy seriously.",
    },
    {
      question: "What about time zones?",
      answer:
        "Our VAs are in the Philippines (PHT), which overlaps well with US, AU, and EU business hours. We align schedules and handoff times so you get coverage when you need it.",
    },
    {
      question: "Do you train the VAs?",
      answer:
        "Yes. We train on communication, tools, and best practices. For your specific workflows, we document processes during onboarding and support ongoing learning as needed.",
    },
    {
      question: "What if the VA isn’t a good fit?",
      answer:
        "We want you to have the right fit. If something isn’t working, we’ll work with you to adjust responsibilities or, if needed, match you with a different VA. We don’t leave you stuck.",
    },
    {
      question: "How does day-to-day communication work?",
      answer:
        "We use the tools you prefer—email, Slack, Asana, etc. We agree on response times and check-in rhythms during onboarding so expectations are clear.",
    },
    {
      question: "Can I hire the VA full-time later?",
      answer:
        "Many clients start with part-time and scale up. We can discuss moving to a dedicated or full-time arrangement as your needs grow.",
    },
    {
      question: "What’s the typical onboarding timeline?",
      answer:
        "From signed agreement to your VA starting, we aim for 1–2 weeks. This includes matching, intro calls, tool access, and workflow documentation.",
    },
  ],
};

// ——— ABOUT ———
export const aboutPage = {
  title: "About Us",
  subtitle: "Why we exist and what we stand for.",
  story: {
    title: "Our story",
    content: `A&J Virtual Assistance Services was founded to connect businesses with highly skilled Virtual Assistants while creating real opportunities for talented professionals in the Philippines. We saw a need for reliable, well-trained remote support that doesn’t feel like a compromise—and a need for pathways into the VA profession that are built on mentorship and integrity.

Today we focus on two things: delivering excellent VA support so our clients can scale with confidence, and nurturing the next generation of Filipino VAs through training and opportunity.`,
  },
  mission: {
    title: "Mission",
    content:
      "To provide businesses with outstanding virtual assistance while mentoring aspiring Filipino Virtual Assistants and giving them the tools and opportunities to succeed.",
  },
  vision: {
    title: "Vision",
    content:
      "A world where every business can access skilled remote support, and every motivated VA has a clear path to growth—built on trust, quality, and mutual respect.",
  },
  values: [
    {
      title: "Integrity",
      description: "We do what we say and communicate openly with clients and VAs alike.",
      icon: "shield" as IconKey,
    },
    {
      title: "Quality",
      description: "We match the right skills to the right role and support ongoing excellence.",
      icon: "check-circle" as IconKey,
    },
    {
      title: "Partnership",
      description: "We treat every engagement as a long-term partnership, not a transaction.",
      icon: "handshake" as IconKey,
    },
    {
      title: "Growth",
      description: "We invest in our VAs’ development and our clients’ success.",
      icon: "trending-up" as IconKey,
    },
    {
      title: "Care",
      description: "We care about people—our clients, our VAs, and the communities we serve.",
      icon: "heart" as IconKey,
    },
  ],
  whyFilipinoVAs: {
    title: "Why Filipino VAs?",
    content: `The Philippines has a strong tradition of skilled, English-proficient professionals who excel in customer service, administration, and remote collaboration. Many of our VAs have experience in BPO, executive support, and digital roles—and they bring reliability, adaptability, and a strong work ethic.

We’re proud to work with Filipino talent and to contribute to the local VA ecosystem through training and fair opportunity. When you work with A&J, you get capable support and you support a mission that matters.`,
  },
  founder: {
    name: "Aiza C. Seno",
    role: "Founder",
    bio: "Driving A&J's mission to connect businesses with exceptional VAs and to mentor the next generation of Filipino virtual assistants.",
    image: "/aj-founder.jpeg",
  },
  team: [
    {
      name: "Placeholder Partner",
      role: "VA Success & Training",
      bio: "Overseeing VA recruitment, training, and client matching so every engagement starts and stays strong.",
    },
  ],
};

// ——— TESTIMONIALS ———
export interface Testimonial {
  name: string;
  roleOrIndustry: string;
  quote: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    roleOrIndustry: "E-commerce, Health & Wellness",
    quote:
      "Our VA handles order processing and customer emails so we can focus on product and marketing. The difference in our response time and peace of mind has been huge.",
    stars: 5,
  },
  {
    name: "Marcus Webb",
    roleOrIndustry: "Coaching & Consulting",
    quote:
      "I was drowning in admin. Now my VA manages my calendar, drafts emails, and keeps my CRM updated. I finally have time to actually coach.",
    stars: 5,
  },
  {
    name: "Elena Rodriguez",
    roleOrIndustry: "Real Estate",
    quote:
      "Lead follow-up and listing updates used to fall through the cracks. Our VA keeps the pipeline moving and our clients informed. Professional and reliable.",
    stars: 5,
  },
  {
    name: "James Okonkwo",
    roleOrIndustry: "SaaS Startup",
    quote:
      "We needed support that could grow with us. A&J matched us with a VA who learned our tools fast and now owns a big chunk of our ops. Highly recommend.",
    stars: 5,
  },
  {
    name: "Lisa Park",
    roleOrIndustry: "Legal Services",
    quote:
      "Confidentiality and reliability were non-negotiable. Our VA handles scheduling, client intake, and document prep with total discretion. A real extension of our team.",
    stars: 5,
  },
  {
    name: "David Torres",
    roleOrIndustry: "Marketing Agency",
    quote:
      "Social media and basic bookkeeping were eating our time. Our VA took both off our plate. Clear communication and always on top of deadlines.",
    stars: 5,
  },
  {
    name: "Rachel Green",
    roleOrIndustry: "Online Education",
    quote:
      "Student support and content scheduling were overwhelming. Our VA manages both so we can focus on creating courses. The process was smooth from day one.",
    stars: 5,
  },
  {
    name: "Tom Bradley",
    roleOrIndustry: "Professional Services",
    quote:
      "We needed someone who could handle sensitive client communication and internal admin. A&J found us the right fit and the onboarding was seamless.",
    stars: 5,
  },
];

export interface CaseSnapshot {
  challenge: string;
  solution: string;
  outcome: string;
}

export const caseSnapshots: CaseSnapshot[] = [
  {
    challenge: "A coaching practice was spending 15+ hours a week on scheduling, email, and CRM updates.",
    solution: "We matched them with a VA trained in calendar management, email drafting, and their CRM. We documented workflows and set clear response-time expectations.",
    outcome: "The coach reclaimed most of that time and increased client capacity without adding in-house staff. The VA became a trusted part of the practice.",
  },
  {
    challenge: "An e-commerce brand was missing order follow-ups and losing repeat customers.",
    solution: "We provided a VA focused on order processing, shipping updates, and post-purchase email sequences. We integrated with their store and support tools.",
    outcome: "Response times improved sharply and customer satisfaction scores went up. The owner could focus on product and marketing instead of daily ops.",
  },
  {
    challenge: "A small agency needed consistent social media and basic bookkeeping but couldn’t justify full-time hires.",
    solution: "We set up a single VA with split responsibilities: content scheduling, engagement, and expense categorization in their existing tools.",
    outcome: "Social presence stayed consistent and books stayed organized. The agency grew without adding overhead.",
  },
];

// ——— FOR VAs ———
export const forVAsPage = {
  title: "For Virtual Assistants",
  subtitle: "Join our network. Get trained. Get placed.",
  intro: `A&J isn’t only about serving clients—we’re committed to mentoring aspiring Virtual Assistants and providing real opportunities. If you’re in the Philippines, eager to learn, and ready to work with integrity and professionalism, we want to hear from you.`,
  whatWeLookFor: {
    title: "What we look for",
    items: [
      "Strong written and spoken English",
      "Reliability and attention to detail",
      "Basic comfort with tools (email, spreadsheets, messaging apps)",
      "Willingness to learn new software and workflows",
      "Integrity and respect for confidentiality",
      "A stable internet connection and quiet workspace",
    ],
  },
  applicationSteps: [
    "Submit the application form below with your background and interests.",
    "We review and may invite you for a short video call to discuss experience and goals.",
    "If there’s a fit, we’ll walk you through our onboarding and training expectations.",
    "When a client role matches your profile, we’ll introduce you and support the onboarding.",
    "We stay in touch for check-ins and ongoing development.",
  ],
  cta: {
    title: "Ready to start?",
    buttonText: "Apply as a VA",
    buttonHref: "/for-vas/apply",
  },
  applyForm: {
    title: "Apply as a VA",
    fields: {
      name: "Full name",
      email: "Email",
      experience: "Brief experience or background (e.g. admin, customer service, previous VA work)",
      message: "Why do you want to join A&J? What type of work are you most interested in?",
    },
    submitLabel: "Submit application",
    successMessage: "Thank you. We’ve received your application and will be in touch.",
  },
};

// ——— CONTACT ———
export const contactPage = {
  title: "Contact",
  subtitle: "Tell us what you need. We’ll get back to you within 1–2 business days.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    companyLabel: "Company (optional)",
    messageLabel: "How can we help?",
    submitLabel: "Send message",
    successMessage: "Thanks for reaching out. We’ll be in touch soon.",
  },
  calendly: {
    buttonText: "Book a free consultation",
    url: "#", // Replace with Calendly link when ready
  },
  businessInfo: {
    email: "hello@ajvirtualassist.com",
    phone: "+63 XXX XXX XXXX",
    address: "Manila, Philippines",
  },
};

// ——— FOOTER ———
export const footer = {
  ctaLine: "Ready to scale with a dedicated VA?",
  ctaButtonText: "Book a free consultation",
  ctaButtonHref: "/contact",
  quickLinks: [
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "For VAs", href: "/for-vas" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" as const },
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" as const },
  ],
  copyright: "© A&J Virtual Assistance Services. All rights reserved.",
};

// ——— SEO (per-page) ———
export const seo = {
  home: {
    title: "A&J Virtual Assistance Services | Filipino Virtual Assistants",
    description:
      "Scale faster with highly skilled Filipino Virtual Assistants. We streamline operations, boost productivity, and help you grow. Book a free consultation.",
  },
  services: {
    title: "Services",
    description:
      "Admin support, customer support, social media, lead generation, bookkeeping, and e-commerce support. Flexible packages for every stage of growth.",
  },
  howItWorks: {
    title: "How It Works",
    description:
      "What is a VA? How we match, onboard, and support you. Tools we use, tasks VAs can do, and answers to common questions.",
  },
  about: {
    title: "About Us",
    description:
      "Our story, mission, and values. Why we mentor Filipino VAs and how we deliver reliable virtual assistance.",
  },
  testimonials: {
    title: "Testimonials",
    description:
      "What clients say about working with A&J Virtual Assistance Services and our Filipino VAs.",
  },
  forVAs: {
    title: "For VAs",
    description:
      "Join our VA network. We mentor aspiring Filipino Virtual Assistants and connect you with client opportunities.",
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch for a free consultation. We’ll match you with the right VA for your needs.",
  },
  apply: {
    title: "Apply as a VA",
    description: "Apply to join A&J Virtual Assistance Services as a Virtual Assistant.",
  },
};
