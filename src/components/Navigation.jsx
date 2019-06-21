import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Navbar, NavbarMenu, NavbarItem, NavbarBrand, NavbarBurger, NavbarStart, NavbarEnd, Button, Image } from "bloomer";

// Grabs all MDX files from src/pages and puts them into the navigation
class Navigation extends React.Component {

	state = {};

	onClickNav() {
		this.setState({
			isActive: !this.state.isActive
		})
	}

	render() {

		return (
			<StaticQuery
				query={query}
				render={data => (
				
					<Navbar style={{ position: "sticky", top: 0 }}>
						<NavbarBrand>
							<NavbarItem href="/">
								<img src="/logo.png" alt="Site Logo" />
							</NavbarItem>
							<NavbarBurger isActive={this.state.isActive} onClick={this.onClickNav.bind(this)} />
						</NavbarBrand>
						<NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav.bind(this)}>
						<NavbarStart>
								<NavbarItem href="/" data-testid="home-title-link" isActive="nav-active">
									Home
								</NavbarItem>
								<NavbarItem href="/about" data-testid="about-title-link" isActive="nav-active">
									About
								</NavbarItem>
								<NavbarItem href="/resume" data-testid="resume-title-link" isActive="nav-active">
									Resume
								</NavbarItem>
								<NavbarItem href="/portfolio" data-testid="portfolio-title-link" isActive="nav-active">
									Portfolio
								</NavbarItem>
								<NavbarItem href="/contact" data-testid="contact-title-link" isActive="nav-active">
									Contact
								</NavbarItem>
						</NavbarStart>
						<NavbarEnd>
							<NavbarItem
								href="https://github.com/kylekarpack"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Github">
								<FaGithub />
							</NavbarItem>
							<NavbarItem
								href="https://www.linkedin.com/in/kylekarpack"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn">
								<FaLinkedin />
							</NavbarItem>
						</NavbarEnd>
						</NavbarMenu>
				  </Navbar>
				)}
			/>
		)
	}
}

export default Navigation

const query = graphql`
  query NavLinks {
    nav: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
