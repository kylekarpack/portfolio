export type Role = {
  title: string;
  dateRange: { start: Date; end?: Date };
};

export type Experience = {
  company: string;
  companyUrl: string;
  description: string;
  highlights: string[];
  roles: Role[];
};

export const experience: Experience[] = [
  {
    company: "Adobe",
    companyUrl: "https://adobe.com/",
    description: `
      <p>
        Leading front-end efforts towards developing and delivering Adobe's flagship B2B marketing analysis product.
      </p>
    `,
    highlights: [
      `Managing the UI roadmap, including planning and implementing large-scale projects`,
      `Migrating our main business intelligence UI to a new framework and infrastructure while adding new features, improving build time by 80%, and exceeding Adobe's targeted code quality and performance metrics`,
      `Leading a product-wide goal to move new development to React and leverage Adobe's unified experience architecture`,
    ],
    roles: [
      {
        title: `Lead Software Engineer`,
        dateRange: { start: new Date("2023-07-01") },
      },
      {
        title: `Senior Software Engineer II`,
        dateRange: { start: new Date("2021-07-01"), end: new Date("2023-06-30") },
      },
      {
        title: `Senior Software Engineer I`,
        dateRange: { start: new Date("2019-10-14"), end: new Date("2021-06-30") },
      },
    ],
  },
  {
    company: "Net-Inspect",
    companyUrl: "https://net-inspect.com",
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
    roles: [
      {
        title: "Lead Front-End Engineer",
        dateRange: { start: new Date("2018-07-12"), end: new Date("2019-08-26") },
      },
      {
        title: "Software Engineer",
        dateRange: { start: new Date("2013-03-30"), end: new Date("2018-07-12") },
      },
    ],
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
