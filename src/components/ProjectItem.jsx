import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { Card, Media, Content, Heading, Image } from "react-bulma-components";


const ProjectItem = ({ node, style, testid }) => (
//   <Item key={node.fields.slug} style={style} data-testid={testid}>
//     <ImageContent>
// 		<Content>
// 		<ImageWrapper>
// 			<Img fluid={node.frontmatter.cover.childImageSharp.fluid} />
// 		</ImageWrapper>
// 		<Link to={node.fields.slug}>
// 			<TracedGlow src={node.frontmatter.cover.childImageSharp.fluid.tracedSVG} alt="" />
// 			<Overlay style={{ backgroundColor: node.fields.color }} />
// 			<h2>{node.frontmatter.title}</h2>
// 			<p>{node.excerpt.replace("Case Study", "").replace("Project Description", "").split("Skills Used")[0]}</p>
// 		</Link>
// 		</Content>
// 	</ImageContent>
// 	<Link to={node.fields.slug}>
// 		<TextContent customcolor={node.fields.color}>
// 			<h2>{node.frontmatter.title}</h2>
// 		</TextContent>
// 	</Link>
//   </Item>
	<Card>
      		<Img fluid={node.frontmatter.cover.childImageSharp.fluid} />

      <Card.Content>
        <Media>
          <Media.Item>
            <Heading size={4}>
				{node.frontmatter.title}
			</Heading>
            <Heading subtitle size={6}>
				{node.frontmatter.title}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
			{node.excerpt.replace("Case Study", "").replace("Project Description", "").split("Skills Used")[0]}
        </Content>
      </Card.Content>
    </Card>
)

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}
