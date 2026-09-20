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
    "Python",
    "C#",
    "HTML",
    "CSS/SCSS/LESS",
    "SQL",
    "Some Java",
    "Some Rust",
    "Some Go",
  ],
  "Frameworks & More": [
    "NodeJS",
    "React",
    "Angular",
    "NextJS",
    "Gatsby",
    "AI SDK",
    "LangChain / Langgraph",
    "GraphQL",
    "Redux",
    "Recoil",
    "Tailwind CSS",
    ".NET",
    "Airflow",
    "dbt",
    "FastAPI",
    "Spark",
  ],
  Tooling: ["Vite", "Webpack", "Parcel", "Lerna", "NX", "pnpm", "NPM", "Yarn", "Git", "Jira"],
  "Infrastructure & Devops": ["Azure", "AWS", "Jenkins", "GitHub Actions", "Docker", "Kubernetes"],
  Testing: ["Jest", "Vitest", "Testing Library", "Cypress"],
  Monitoring: ["Splunk", "New Relic", "Grafana", "Langsmith"],
  Databases: ["Snowflake", "MSSQL", "MongoDB", "Postgres", "ElasticSearch"],
  Design: ["Data visualization", "Various Adobe products", "Vega", "SVG", "strong UX fundamentals"],
};
