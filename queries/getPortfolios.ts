import { gql } from "@/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC, first: 100) {
      date
      description
      images {
        handle
      }
      slug
      title
      portfolioItemType
    }
  }
`;
