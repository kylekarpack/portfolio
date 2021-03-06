import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { animated, useSpring, config } from "react-spring";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { SEO, Container, Layout } from "../components";

const Content = styled(Container)`
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Title = styled(animated.h1)`
  margin-top: 0;
`;

const Single = ({ data: { mdx }, location }) => {
	const single = mdx.frontmatter;

	const titleProps = useSpring({
		config: config.slow,
		from: { opacity: 0, transform: "translate3d(0, -30px, 0)" },
		to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
	});
	const contentProps = useSpring({ config: config.slow, delay: 500, from: { opacity: 0 }, to: { opacity: 1 } });

	return (
		<Layout pathname={location.pathname} customSEO>
			<SEO pathname={location.pathname} postNode={mdx} single />
			<Content type="text">
				<Title data-testid="single-title" style={titleProps}>
					{single.title}
				</Title>
			</Content>
			<Container type="text">
				<animated.div style={contentProps}>
					<MDXRenderer>{mdx.body}</MDXRenderer>
				</animated.div>
			</Container> 
		</Layout>
	);
};

export default Single;

Single.propTypes = {
	data: PropTypes.shape({
		mdx: PropTypes.object.isRequired,
	}).isRequired,
	location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
			body
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`;
