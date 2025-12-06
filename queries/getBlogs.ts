import { gql } from "@/utils/graphcms";

export const getBlogs = gql`
  query {
    blogs(orderBy: publicationDate_DESC, first: 100) {
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
