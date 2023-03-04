export interface Experience {
  company: string;
  companyUrl: string;
  contract?: boolean;
  dateRange?: [start: Date, end?: Date];
  description: string;
  highlights: string[];
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
    tags: ["NodeJS", "TypeScript"],
    title: `Senior Software Engineer`,
  },
  {
    company: "Net-Inspect",
    companyUrl: "https://net-inspect.com",
    dateRange: [new Date("March 2013"), new Date("August 2019")],
    description: `<p>
      Led a team of developers building the leading SaaS application for manufacturing quality management.
      Accomplishments include:
    </p>`,
    highlights: [
      "Completion and launch of a full rewrite of the application in Angular.",
      "Responsibility for architectural decisions, sprint planning, mentoring junior developers, and interviewing candidates",
      "Implementation of regular code reviews, code quality standards, automated testing, extensive documentation, and performance budgets to reduce bugs and improve developer productivity",
      "Migration to Microsoft Azure to reduce costs and provide scalability",
    ],
    tags: [],
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
