export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
  image?: string;
  tags: string[];
  title: string;
}

export const experience: Experience[] = [
  {
    company: "Adobe",
    companyUrl: "https://adobe.com/",
    dateRange: [new Date(2022, 10, 14)],
    description: `
      <p>
        Leading front-end efforts towards Adobe's goal to bring its newly-acquired B2B product onto the Adobe platform.
      </p>
    `,
    highlights: [
      `Managing the  UI roadmap, including planning and implementing large-scale projects`,
      `Migrating our main business intelligence UI to a new framework and infrastructure while adding new features, improving build time by 80%, and exceeding Adobe's targeted code quality and performance metrics`,
      `Leading a product-wide goal to move new development to React and leverage Adobe's Unified Shell architecture`,
    ],
    image: `https://assets-global.website-files.com/602a3f3e454f14956d14543a/602a3f3e454f1438b61455af_ShiftsmartIcon.png`,
    tags: ["NodeJS", "TypeScript"],
    title: `Senior Software Engineer`,
  },
  {
    company: "Net-Inspect",
    companyUrl: "https://net-inspect.com",
    dateRange: [new Date("March 2013"), new Date("August 2019")],
    description: `<p>
      Successfully pitched, prototyped, and delivered several high-impact
      projects within the organization. Assisting in hiring, managing, and
      mentoring engineers at various levels, distributed across the globe.
    </p>`,
    highlights: [
      `Content Management System; Pitched, prototyped, and delivered`,
      `Progressive Web App (PWA); Pitched, prototyped, and delivered`,
      `Lerna Monorepo; Pitched, prototyped, and delivered`,
      `CSS Overhaul; Pitched, prototyped, and delivered`,
      `Apollo Migration, Redux Migration, Checkout Overhaul, and many more...`,
    ],
    image: `https://cf-tup-assets.thredup.com/shop/images/manifest_v2/favicon_96.png`,
    tags: [
      "CSS",
      "Docker",
      "HTML",
      "Kubernetes",
      "PostCSS",
      "NodeJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Webpack",
    ],
    title: `Lead Front-End Engineer`,
  },
];

export interface Social {
  icon: string;
  title: string;
  url: string;
}

export const social: Social[] = [
  {
    icon: `/images/svg/github.svg`,
    title: `kylekarpack`,
    url: `https://github.com/kylekarpack`,
  },
  {
    icon: `/images/svg/linkedin.svg`,
    title: `/in/kylekarpack`,
    url: `https://www.linkedin.com/in/kylekarpack`,
  },
];
