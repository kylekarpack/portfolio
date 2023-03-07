import { gql } from "~/utils/graphcms";

export const getPortfolios = gql`
  query {
    portfolios(orderBy: date_DESC) {
      current
      date
      description
      images {
        url(transformation: { image: { resize: { width: 400, height: 250, fit: crop } } })
      }
      #overview
      slug
      #thumbnailTemp
      title
    }
  }
`;
