import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Layout } from '../components'
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
	Title,
	Container,
	Field,
	Control,
	Label,
	Input,
	Textarea,
	Button
  } from "bloomer";

class ContactPage extends React.Component {

	_onViewportChange = viewport => this.setState({ viewport });

	state = {
		map: {
			mapboxApiAccessToken: "pk.eyJ1Ijoia3lsZWthcnBhY2siLCJhIjoiY2pvZXZmNTh4MDZ2dzN3bm1pbmk1dDlmZiJ9.Gapqs5j98RUsHOBl2rqOGQ",
			mapStyle: "mapbox://styles/mapbox/outdoors-v10",
			viewport: {
				width: "100%",
				height: "35vh",
				latitude: 47.6798,
				longitude: -122.3258,
				zoom: 11
			}
		}
	};

	encode(data) {
		return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&");
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const form = e.target,
			data = this.encode({
				"form-name": form.getAttribute("name"),
				...this.state
			});

		delete data.map;

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: data
		}).then(() => this.setState({ submitted: true })).catch(error => alert(error));
	};

	render() {
		return (
			<Layout pathname={this.props.location.pathname}>

				<ReactMapGL
					mapboxApiAccessToken={this.state.map.mapboxApiAccessToken}
					mapStyle={this.state.map.mapStyle}
					onViewportChange={this._onViewportChange}
					{...this.state.map.viewport}
				/>

				<Container>
					<Title>Contact</Title>
					{/* <h3>Get in Touch</h3>
					<p>Have an idea for a project? Want me to work for you? Send me a message here and I’ll get back to you as soon as possible.</p>
			
					<h3>Based Out of the PNW</h3>
					<p>Born and raised here, I love the Pacific Northwest and plan on being here for a long while.</p> */}
					<form name="contact" method="POST" data-netlify data-netlify-honeypot="bot-field" onSubmit={this.handleSubmit} hidden={this.state.submitted}>
						
						<input type="hidden" name="form-name" value="contact" />

						<p hidden>
							<label>
								Don’t fill this out:{" "}
								<input name="bot-field" onChange={this.handleChange} />
							</label>
						</p>

						<Field>
							<Label>Name</Label>
							<Control>
								<Input name="name" placeholder="Your name" onChange={this.handleChange} />
							</Control>
						</Field>

						<Field>
							<Label>Email</Label>
							<Control>
								<Input type="email" name="email" placeholder="Your email" required onChange={this.handleChange} />
							</Control>
						</Field>

						<Field>
							<Label>Message</Label>
							<Control>
								<Textarea name="message" placeholder="Your message" rows="4" required onChange={this.handleChange} />
							</Control>
						</Field>

						<Button type="submit">Send</Button>
					</form>

					<p hidden={!this.state.submitted}>
						Thank you for your submission. I will get back to you shortly.
					</p>
				</Container>
			</Layout>
		)
	}

}

export default ContactPage

ContactPage.propTypes = {
	location: PropTypes.object.isRequired,
}
