export const SectionProficiencies = () => {
  return (
    <section>
      <div>
        <h2 className="py-8 text-lg print:py-4 md:text-xl">Proficiencies</h2>
        <div className="mb-8 border-t border-solid border-color-border print:hidden" />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 p-1 text-sm print:grid-cols-3 md:grid-cols-2">
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Languages</h3>
          TypeScript, Javascript, HTML, CSS/SCSS/LESS, C#, SQL, Some Rust, Some
          Go
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">
            Frameworks &amp; More
          </h3>
          NodeJS, React, Angular, NextJS, Remix, Gatsby, GraphQL, Recoil
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">DevOps</h3>
          Azure, AWS, Jenkins, GitHub Actions, Docker
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Testing</h3>
          Jest, Testing Library, Vitest, Cypress
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Monitoring</h3>
          Splunk, New Relic, Grafana
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Tooling</h3>
          Webpack, Parcel, Vite, Lerna, NX, NPM, Yarn, Git, Jira
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Databases</h3>
          Snowflake, MSSQL, MongoDB, Postgres, ElasticSearch
        </div>
        <div className="rounded-md border bg-color-background-light p-4 shadow-md print:border-0 print:shadow-none">
          <h3 className="text-lg text-color-copy-light">Design</h3>
          Various Adobe products, SVG, image optimization
        </div>
      </div>
    </section>
  );
};
