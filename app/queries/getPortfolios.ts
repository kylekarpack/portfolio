import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC, first: 100) {
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
