import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: createdAt_DESC) {
      current
      date
      description
      images {
        url(transformation: { image: { resize: { width: 300 } } })
      }
      #overview
      slug
      #thumbnailTemp
      title
    }
  }
`;
