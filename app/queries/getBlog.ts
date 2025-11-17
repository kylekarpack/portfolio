import { gql } from "~/utils/graphcms";

export const getBlog = gql`
  query ($slug: String!) {
    blogs(where: { slug: $slug }) {
      title
      slug
      previewImage {
        url
        handle
      }
      publicationDate
      categories
      content {
        markdown
        text
        raw
      }
    }
  }
`;
