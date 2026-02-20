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
  | "bar-chart"
  | "stethoscope"
  | "dollar-sign"
  | "user-x"
  | "search"
  | "badge-percent"
  | "clock"
  | "user-check";

export interface NavItem {
  label: string;
  href: string;
}

export interface HomeHero {
  tagline?: string;
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
export interface HighlightCard {
  title: string;
  description: string;
  icon: IconKey;
}

export interface HighlightSection {
  title: string;
  subtitle?: string;
  cards: HighlightCard[];
}

export const home: {
  hero: HomeHero;
  trustRow: string[];
  staffingCrisis: HighlightSection;
  professionalVAs: HighlightSection;
  servicesOverview: { title: string; description: string; icon: IconKey }[];
  howItWorksSteps: { title: string; description: string }[];
  missionBanner: { title: string; description: string; cta: string; ctaHref: string };
  featuredTestimonials: number[];
  finalCta: { title: string; subtitle: string; buttonText: string; buttonHref: string };
} = {
  hero: {
    tagline: "Choose your own VA",
    headline: "Scale faster with highly skilled Filipino Virtual Assistants.",
    subheadline:
      "We streamline your operations, boost productivity, and help you scale effectively\u2014so you can focus on what matters most.",
    primaryCta: "Book a Free Consultation",
    primaryCtaHref: "/book",
    secondaryCta: "Explore Services",
    secondaryCtaHref: "/services",
    // Optional: set one of these to add a background. Video takes precedence if both are set.
    backgroundImage: "/hero-bg.jpg",
    // backgroundVideo: "/hero-bg.mp4",
  },
  trustRow: ["Reliable", "Trained", "Confidential", "Long-term"],

  staffingCrisis: {
    title: "The Front Desk Staffing Crisis Is Real",
    subtitle: "Businesses everywhere are struggling with the same staffing pain points.",
    cards: [
      {
        title: "High Costs",
        description:
          "Paying $3,000\u20134,000/month for unreliable part-time help that barely covers your needs.",
        icon: "dollar-sign" as IconKey,
      },
      {
        title: "Unreliable Staff",
        description:
          "Constant call-outs and no-shows disrupting your operations and client experience.",
        icon: "user-x" as IconKey,
      },
      {
        title: "Hiring Challenges",
        description:
          "Can\u2019t find qualified candidates willing to handle front desk and administrative tasks.",
        icon: "search" as IconKey,
      },
    ],
  },

  professionalVAs: {
    title: "Professional Medical VAs at Half the Cost",
    subtitle: "Get dedicated, skilled support without breaking the bank.",
    cards: [
      {
        title: "60% Cost Savings",
        description:
          "Full-time dedicated VA support starting at a fraction of local hiring costs.",
        icon: "badge-percent" as IconKey,
      },
      {
        title: "Trained & Professional",
        description:
          "Pre-vetted VAs with proven skills, ready to integrate with your workflows from day one.",
        icon: "user-check" as IconKey,
      },
      {
        title: "Reliable Coverage",
        description:
          "Backup VAs included\u2014no call-outs, no gaps, no disruptions to your business.",
        icon: "clock" as IconKey,
      },
    ],
  },

  servicesOverview: [
    {
      title: "Medical Virtual Assistant",
      description: "Patient scheduling, medical transcription, billing support, and EHR management for healthcare professionals.",
      icon: "stethoscope" as IconKey,
    },
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
      title: "Discovery Call",
      description: "We learn about your business, pain points, and what you need in a VA.",
    },
    {
      title: "Candidate Matching",
      description: "We interview and vet candidates based on experience and role fit—no generic tests.",
    },
    {
      title: "You Choose Your VA",
      description: "Review matched candidates and select the VA that fits your team best.",
    },
    {
      title: "Onboarding",
      description: "Your VA is trained directly by you for seamless integration into your systems.",
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
    subtitle: "Tell us about your needs and we\u2019ll find the right fit.",
    buttonText: "Get in touch",
    buttonHref: "/book",
  },
};

// ——— SERVICES ———
export const servicesPage = {
  title: "Services",
  subtitle: "We offer flexible support across the areas that matter most to growing teams.",
  categories: [
    {
      title: "Medical Virtual Assistant",
      shortDescription: "Specialized support for healthcare professionals and medical practices.",
      icon: "stethoscope" as IconKey,
      included: [
        "Medical transcription and documentation",
        "Patient scheduling and appointment management",
        "Insurance verification and pre-authorization",
        "Medical billing and coding support",
        "Electronic Health Records (EHR/EMR) management",
        "Patient intake and follow-up coordination",
        "Referral management and tracking",
        "HIPAA-compliant administrative support",
      ],
      bestFor: "Doctors, dentists, clinics, telehealth providers, and healthcare businesses who need reliable, detail-oriented administrative support.",
      sampleTasks: [
        "Schedule and confirm patient appointments",
        "Transcribe medical notes and reports",
        "Verify patient insurance and eligibility",
        "Manage EHR/EMR data entry and updates",
        "Process and follow up on medical billing claims",
        "Coordinate patient referrals and authorizations",
        "Handle patient inquiries and appointment reminders",
        "Organize and maintain medical records",
      ],
    },
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
      hoursOrRole: "10\u201320 hours/week or part-time role",
      bestFor: "Solopreneurs and small teams testing VA support.",
      note: "Let\u2019s tailor this to your needs.",
    },
    {
      name: "Growth",
      hoursOrRole: "20\u201340 hours/week or dedicated VA",
      bestFor: "Growing businesses ready for consistent, dedicated support.",
      note: "Let\u2019s tailor this to your needs.",
    },
    {
      name: "Scale",
      hoursOrRole: "40+ hours or multiple VAs",
      bestFor: "Teams scaling operations and need coverage across functions.",
      note: "Let\u2019s tailor this to your needs.",
    },
  ],
  customVA: {
    title: "Need a different type of VA?",
    description:
      "Don\u2019t see the exact niche you\u2019re looking for? No problem. We can source and match you with a Virtual Assistant tailored to your specific business needs\u2014whether it\u2019s real estate, legal, insurance, tech support, project management, or any other field. Just tell us what you need, and we\u2019ll find the right talent for you.",
    cta: "Request a Custom VA",
    ctaHref: "/book",
    highlights: [
      "Tell us the role, tasks, and skills you need",
      "We\u2019ll source and vet candidates from our talent pool",
      "Get matched with a VA trained for your industry",
      "Full onboarding and ongoing support included",
    ],
  },
};

// ——— HOW IT WORKS ———
export const howItWorksPage = {
  title: "How It Works",
  subtitle: "From first call to fully onboarded \u2014 here\u2019s how simple hiring your VA really is.",
  whatIsVA: {
    title: "What is a Virtual Assistant?",
    content: `A Virtual Assistant (VA) is a skilled professional who works remotely to support your business\u2014handling administrative, creative, or operational tasks so you can focus on growth and strategy. VAs can manage calendars, email, customer support, social media, lead generation, bookkeeping, and more, depending on your needs.

At A&J, our VAs are based in the Philippines and are trained in communication, tools, and best practices. We match you with someone whose skills and experience align with your goals, then support both of you with clear processes and ongoing check-ins.`,
  },
  steps: [
    {
      title: "Discovery Call",
      description:
        "We start with a free consultation to understand your business, your pain points, and the type of support you need. This helps us define the ideal VA profile for your role \u2014 so we\u2019re not guessing, we\u2019re targeting.",
      highlight: "No commitment required. Just a conversation.",
    },
    {
      title: "Candidate Matching",
      description:
        "We conduct structured interviews focused on real experience and role alignment. We evaluate communication skills, relevant background, and cultural fit \u2014 not generic typing tests or cookie-cutter assessments. This keeps the process fast while maintaining quality.",
      highlight: "No generic tests. No wasted time. Just qualified candidates.",
    },
    {
      title: "Client Interview & Selection",
      description:
        "We present you with pre-vetted candidates that match your needs. You interview them, ask your questions, and choose the VA you feel most confident about. It\u2019s your team \u2014 you make the final call.",
      highlight: "Choose your own VA. It\u2019s your call.",
    },
    {
      title: "Onboarding",
      description:
        "Once you\u2019ve selected your VA, training is conducted directly by you to ensure seamless integration into your systems, tools, and workflows. We support the transition and stay available for check-ins to make sure everything runs smoothly.",
      highlight: "Your VA learns your way of doing things \u2014 from day one.",
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
        "We offer flexible arrangements based on hours per week or dedicated roles. Pricing depends on scope, complexity, and level of experience. Book a free consultation and we\u2019ll provide a tailored proposal.",
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
      question: "What if the VA isn\u2019t a good fit?",
      answer:
        "We want you to have the right fit. If something isn\u2019t working, we\u2019ll work with you to adjust responsibilities or, if needed, match you with a different VA. We don\u2019t leave you stuck.",
    },
    {
      question: "How does day-to-day communication work?",
      answer:
        "We use the tools you prefer\u2014email, Slack, Asana, etc. We agree on response times and check-in rhythms during onboarding so expectations are clear.",
    },
    {
      question: "Can I hire the VA full-time later?",
      answer:
        "Many clients start with part-time and scale up. We can discuss moving to a dedicated or full-time arrangement as your needs grow.",
    },
    {
      question: "What\u2019s the typical onboarding timeline?",
      answer:
        "From signed agreement to your VA starting, we aim for 1\u20132 weeks. This includes matching, intro calls, tool access, and workflow documentation.",
    },
  ],
};

// ——— ABOUT ———
export const aboutPage = {
  title: "About Us",
  subtitle: "Two dreamers on a mission to transform businesses and careers through Virtual Assistance.",
  story: {
    title: "Our Story",
    content: `Our journey began like that of many dreamers\u2014two dedicated, hardworking professionals striving for success while juggling demanding corporate jobs, limited income, and raising children. We knew that achieving our goals would require more than perseverance; it would demand creativity, resilience, and a willingness to embrace new opportunities.

That opportunity came in the form of Virtual Assistance. Entering this field was both exciting and challenging. We underwent rigorous training across multiple departments and faced what many call a \u201Cthrown-to-the-wolves\u201D experience. These early challenges tested our skills, patience, and determination, but they also taught us valuable lessons about adaptability, problem-solving, and professional growth.

Through every challenge, we relied on hard work, a clear vision, and a commitment to making a difference\u2014not just for ourselves, but for others who needed reliable support in building their businesses. We are also passionate about helping fellow Virtual Assistants and aspiring VAs by providing opportunities to grow, learn, and transform their careers through meaningful work.

Today, we specialize in connecting businesses with highly skilled Virtual Assistants (VAs) through a streamlined, cost-efficient recruitment model. Our mission is to deliver pre-vetted, job-ready candidates tailored to your unique needs, ensuring that your business gains the talent it requires while keeping the hiring process simple, efficient, and affordable. With our expertise, dedication, and people-first approach, we aim to make a measurable difference in the success of your business and the careers of those we support.`,
  },
  mission: {
    title: "Our Mission",
    content:
      "To connect businesses with highly skilled, carefully screened Virtual Assistants through a streamlined, cost-efficient recruitment model that makes hiring simple, transparent, and affordable. We deliver job-ready talent tailored to each client\u2019s needs while creating meaningful opportunities that empower Virtual Assistants to build sustainable and life-changing remote careers.",
  },
  vision: {
    title: "Our Vision",
    content:
      "To become a trusted partner for businesses worldwide by building a reliable network of exceptional Virtual Assistants known for professionalism, adaptability, and excellence. We envision a future where companies grow confidently with the right support, and Virtual Assistants are given fair opportunities, proper guidance, and the chance to build stable, fulfilling careers\u2014creating success stories for both clients and professionals alike.",
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
      description: "We invest in our VAs\u2019 development and our clients\u2019 success.",
      icon: "trending-up" as IconKey,
    },
    {
      title: "Care",
      description: "We care about people\u2014our clients, our VAs, and the communities we serve.",
      icon: "heart" as IconKey,
    },
  ],
  whyFilipinoVAs: {
    title: "Why Filipino VAs?",
    content: `The Philippines has a strong tradition of skilled, English-proficient professionals who excel in customer service, administration, and remote collaboration. Many of our VAs have experience in BPO, executive support, and digital roles\u2014and they bring reliability, adaptability, and a strong work ethic.

We\u2019re proud to work with Filipino talent and to contribute to the local VA ecosystem through training and fair opportunity. When you work with A&J, you get capable support and you support a mission that matters.`,
  },
  founder: {
    name: "Aiza C. Seno",
    role: "Founder",
    bio: "Driving A&J\u2019s mission to connect businesses with exceptional VAs and to mentor the next generation of Filipino virtual assistants.",
    image: "/aj-founder.jpeg",
  },
  coFounder: {
    name: "John Paul L. Ruales",
    role: "Co-Founder",
    bio: "Building the operational backbone of A&J and ensuring every client\u2013VA partnership is set up for long-term success.",
    image: "/aj-cofounder.jpeg",
  },
  team: [] as { name: string; role: string; bio: string }[],
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
    challenge: "A small agency needed consistent social media and basic bookkeeping but couldn\u2019t justify full-time hires.",
    solution: "We set up a single VA with split responsibilities: content scheduling, engagement, and expense categorization in their existing tools.",
    outcome: "Social presence stayed consistent and books stayed organized. The agency grew without adding overhead.",
  },
];

// ——— FOR VAs ———
export const forVAsPage = {
  title: "For Virtual Assistants",
  subtitle: "Join our network. Get trained. Get placed.",
  intro: `A&J isn\u2019t only about serving clients\u2014we\u2019re committed to mentoring aspiring Virtual Assistants and providing real opportunities. If you\u2019re in the Philippines, eager to learn, and ready to work with integrity and professionalism, we want to hear from you.`,
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
    "If there\u2019s a fit, we\u2019ll walk you through our onboarding and training expectations.",
    "When a client role matches your profile, we\u2019ll introduce you and support the onboarding.",
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
    successMessage: "Thank you. We\u2019ve received your application and will be in touch.",
  },
};

// ——— CONTACT ———
export const contactPage = {
  title: "Contact",
  subtitle: "Tell us what you need. We\u2019ll get back to you within 1\u20132 business days.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    companyLabel: "Company (optional)",
    messageLabel: "How can we help?",
    submitLabel: "Send message",
    successMessage: "Thanks for reaching out. We\u2019ll be in touch soon.",
  },
  calendly: {
    buttonText: "Book a free consultation",
    url: "/book",
  },
  businessInfo: {
    email: "hello@ajvirtualassist.com",
    phone: "+63 XXX XXX XXXX",
    address: "Manila, Philippines",
  },
};

// ——— BOOK (consultation calendar) ———
export const bookingPage = {
  title: "Book a free consultation",
  subtitle: "Enter your details, then choose a date and time that works for you.",
  form: {
    nameLabel: "Name",
    companyLabel: "Company (optional)",
    continueButtonText: "Choose date & time",
  },
  /** Cal.com booking URL \u2014 embedded in iframe on /book. No trailing slash. */
  calComUrl: "https://cal.com/a-j-virtualassistanceservices-jdsqag/free-consultation",
};

// ——— FOOTER ———
export const footer = {
  ctaLine: "Ready to scale with a dedicated VA?",
  ctaButtonText: "Book a free consultation",
  ctaButtonHref: "/book",
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
  copyright: "\u00A9 A&J Virtual Assistance Services. All rights reserved.",
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
      "Medical VA, admin support, customer support, social media, lead generation, bookkeeping, e-commerce support, and custom VA solutions. Flexible packages for every stage of growth.",
  },
  howItWorks: {
    title: "How It Works",
    description:
      "What is a VA? How we match, onboard, and support you. Tools we use, tasks VAs can do, and answers to common questions.",
  },
  about: {
    title: "About Us",
    description:
      "Our story, mission, and vision. How two dreamers built A&J to connect businesses with skilled Virtual Assistants and empower VA careers.",
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
      "Get in touch for a free consultation. We\u2019ll match you with the right VA for your needs.",
  },
  book: {
    title: "Book a consultation",
    description:
      "Book a free consultation. Enter your name and company, then pick a time on the calendar.",
  },
  apply: {
    title: "Apply as a VA",
    description: "Apply to join A&J Virtual Assistance Services as a Virtual Assistant.",
  },
};
