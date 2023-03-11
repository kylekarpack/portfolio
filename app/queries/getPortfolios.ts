import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC) {
      current
      date
      description
      images {
        handle
      }
      slug
      title
    }
  }
`;
