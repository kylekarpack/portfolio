import { gql } from "@/utils/graphcms";

export const getSitemap = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations
    __type(name: "Tags") {
      enumValues {
        name
      }
    }

    portfolios(orderBy: date_DESC) {
      date
      slug
      title
    }
  }
`;
