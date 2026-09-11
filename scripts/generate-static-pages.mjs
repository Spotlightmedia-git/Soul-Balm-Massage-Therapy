import fs from "node:fs/promises";
import path from "node:path";

const outputRoot = path.resolve("dist/public");
const pages = [
  {
    route: "/",
    title: "Massage Therapy in Kansas City, MO | Soul Balm",
    description: "Thoughtful, client-centered massage therapy in Kansas City, MO. Explore Soul Balm's massage services and book your session online.",
  },
  {
    route: "/about",
    title: "About Soul Balm Massage Therapy | Kansas City, MO",
    description: "Meet Teresa Nerem and learn about Soul Balm Massage Therapy's thoughtful, one-on-one approach in Kansas City, Missouri.",
  },
  {
    route: "/contact",
    title: "Contact Soul Balm Massage Therapy | Kansas City, MO",
    description: "Contact Soul Balm Massage Therapy in Kansas City, MO for appointment questions, directions, and online booking information.",
  },
  {
    route: "/services/deep-tissue-massage",
    title: "Deep Tissue Massage in Kansas City, MO | Soul Balm",
    description: "Deep tissue massage in Kansas City, MO, customized to your comfort, pressure preferences, and priority areas. Book your session with Soul Balm.",
  },
  {
    route: "/services/swedish-massage",
    title: "Swedish Massage in Kansas City, MO | Soul Balm",
    description: "Swedish massage in Kansas City, MO, with flowing techniques and pressure tailored to your comfort. Book your session with Soul Balm.",
  },
  {
    route: "/services/ashiatsu-massage",
    title: "Ashiatsu Massage in Kansas City, MO | Soul Balm",
    description: "Ashiatsu barefoot massage in Kansas City, MO, with broad compression, long gliding strokes, and pressure tailored to your comfort.",
  },
  {
    route: "/services/lymphatic-massage",
    title: "Lymphatic Drainage Massage Kansas City, MO | Soul Balm",
    description: "Manual lymphatic drainage massage in Kansas City, MO, with gentle, light-pressure, rhythmic techniques. Book your session with Soul Balm.",
  },
  {
    route: "/services/prenatal-massage",
    title: "Prenatal Massage in Kansas City, MO | Soul Balm",
    description: "Prenatal massage in Kansas City, MO, customized around comfort, positioning, and your preferences. Book your session with Soul Balm.",
  },
  {
    route: "/privacy-policy",
    title: "Privacy Policy | Soul Balm Massage Therapy",
    description: "Read the Soul Balm Massage Therapy website privacy policy.",
  },
  {
    route: "/terms-and-conditions",
    title: "Terms and Conditions | Soul Balm Massage Therapy",
    description: "Read the Soul Balm Massage Therapy website terms and conditions.",
  },
];

const siteUrl = "https://soul-balm-massage-therapy-spotlight-s-projects.vercel.app";
const source = await fs.readFile(path.join(outputRoot, "index.html"), "utf8");

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

for (const page of pages) {
  const canonical = `${siteUrl}${page.route === "/" ? "/" : page.route}`;
  const headTags = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Soul Balm Massage Therapy" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
  ].join("\n    ");
  const html = source
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content=".*?"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace("</head>", `    ${headTags}\n  </head>`);
  const relativeDirectory = page.route === "/" ? "" : page.route.replace(/^\//, "");
  const destination = path.join(outputRoot, relativeDirectory, "index.html");
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, html);
}

console.log(`Generated static metadata for ${pages.length} public routes.`);
