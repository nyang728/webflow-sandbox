// Static content shared by the Resources and Search pages.

export const resources = [
  {
    id: "platform-overview",
    title: "OneTrust Sandbox Platform Overview",
    description: "A short PDF introducing the fictional OneTrust Sandbox Inc platform, services, and test environment.",
    file: "/downloads/onetrust-sandbox-overview.pdf",
    type: "PDF",
    size: "2 KB",
    category: "Guide",
  },
];

export const searchIndex = [
  {
    title: "Home",
    href: "/",
    type: "Page",
    body: "OneTrust Sandbox Inc is a fictional test company for validating Webflow and Webflow Cloud deployments. Privacy, consent, and trust sandbox.",
  },
  {
    title: "About Us",
    href: "/about",
    type: "Page",
    body: "Our mission, our values, and the team behind OneTrust Sandbox Inc. Founded to test Next.js and React apps on Webflow Cloud.",
  },
  {
    title: "Contact",
    href: "/contact",
    type: "Page",
    body: "Get in touch with the sandbox team. Send a message, email, phone, office address, support hours.",
  },
  {
    title: "Resources",
    href: "/resources",
    type: "Page",
    body: "Download guides, whitepapers, and PDF files about the sandbox platform.",
  },
  {
    title: "Consent Sandbox",
    href: "/about#services",
    type: "Service",
    body: "Test cookie banners, consent preferences, and privacy flows in an isolated sandbox environment.",
  },
  {
    title: "Data Mapping Lab",
    href: "/about#services",
    type: "Service",
    body: "Experiment with data inventory and mapping workflows using fake data only.",
  },
  {
    title: "Deployment Testing",
    href: "/about#services",
    type: "Service",
    body: "Validate builds, edge runtime behavior, and base paths when deploying Next.js to Webflow Cloud.",
  },
  ...resources.map((r) => ({
    title: r.title,
    href: "/resources",
    type: "Resource",
    body: r.description,
  })),
];
