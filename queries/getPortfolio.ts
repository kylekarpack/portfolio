import { gql } from "@/utils/graphcms";

export const getPortfolioBySlug = gql`
  query portfolios($slug: String!) {
    portfolios(where: { slug: $slug }) {
      content {
        html
      }
      description
      id
      images {
        url
        handle
      }
      slug
      title
    }
  }
`;
