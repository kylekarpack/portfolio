import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from "gatsby";
import { Card, CardImage, CardContent, Content, Media, MediaContent, Title, Subtitle, Tag } from "bloomer";

const TracedGlow = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.08;
  filter: invert(100%);
  z-index: -1;
`;

const ImageWrapper = styled.div`
  > div {
    height: 100%;
    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;
    }
  }
`;

const ProjectItem = ({ node, style, testid }) => (
	<Link to={node.fields.slug} key={node.fields.slug}>
		<Card>
			<CardImage style={{ backgroundColor: node.fields.color }}>
				{/* <ImageWrapper> */}
					<Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
					<TracedGlow src={node.frontmatter.cover.childImageSharp.fluid.tracedSVG} alt="" />
				{/* </ImageWrapper> */}
			</CardImage>
			<CardContent>
				<Media>
				<MediaContent>
					<Title isSize={4}>
						{node.frontmatter.title}
					</Title>
					<Subtitle isSize={6}>
						{node.frontmatter.date}
					</Subtitle>
				</MediaContent>
				</Media>
				<Content>
					<p>
						{node.excerpt.replace("Case Study", "").replace("Project Description", "").split("Skills Used")[0]}
					</p>
					{
						node.frontmatter.skills && node.frontmatter.skills.map(skill => {
							return (
								<>
									<Tag key={skill}>{skill}</Tag>&nbsp;
								</>
							)
						})
					}
				</Content>
			</CardContent>
		</Card>
	</Link>
)

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}
