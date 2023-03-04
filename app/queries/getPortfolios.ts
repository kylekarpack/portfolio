import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: createdAt_DESC) {
      current
      # date
      description
      #images {
      # url
      #}
      #overview
      slug
      #thumbnailTemp
      title
    }
  }
`;
