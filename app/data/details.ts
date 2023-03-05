export interface Data {
  className: string;
  company: string;
  image: string;
  url: string;
}

export const technologies: Record<string, string[]> = {
  Languages: [
    "TypeScript",
    "Javascript",
    "HTML",
    "CSS/SCSS/LESS",
    "C#",
    "SQL",
    "Some Rust",
    "Some Go",
  ],
  "Frameworks & More": [
    "NodeJS",
    "React",
    "Angular",
    "NextJS",
    "Remix",
    "Gatsby",
    "GraphQL",
    "Recoil",
    "Tailwind CSS",
    ".NET",
  ],
  Tooling: [
    "Webpack",
    "Parcel",
    "Vite",
    "Lerna",
    "NX",
    "NPM",
    "Yarn",
    "Git",
    "Jira",
  ],
  "Infrastructure & Devops": [
    "Azure",
    "AWS",
    "Jenkins",
    "GitHub Actions",
    "Docker",
  ],
  Testing: ["Jest", "Testing Library", "Vitest", "Cypress"],
  Monitoring: ["Splunk", "New Relic", "Grafana"],
  Databases: ["Snowflake", "MSSQL", "MongoDB", "Postgres", "ElasticSearch"],
  Design: ["Various Adobe products", "SVG", "strong UX fundamentals"],
};
