import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'
import Img from 'gatsby-image'
import { Card, CardImage, CardContent, Content, Media, MediaContent, Title, Subtitle, Tag } from "bloomer";


const ProjectItem = ({ node, style, testid }) => (
	<Card>
		<CardImage>
      		<Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
		</CardImage>
      <CardContent>
        <Media>
          <MediaContent>
            <Title isSize={4}>
				{node.frontmatter.title}
			</Title>
            <Subtitle isSize={6}>
				{node.frontmatter.title}
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
							<Tag>{skill}</Tag>&nbsp;
						</>
					)
				})
			}
		</Content>
      </CardContent>
    </Card>
)

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}
