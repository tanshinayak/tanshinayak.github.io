import React from "react";
import PropTypes from "prop-types";

export default class Contact extends React.Component {
	render() {
		return (
			<div id="my-contact" className="container text-center my-5">
				<h1 id="contact" className={"mb-3 mt-5" + this.props.fadeInLeft}>
					Contact Me
				</h1>
			       <h3 className="mt-5"> Email: tanshitn@gmail.com </h3>
			</div>
		);
	}
}

Contact.propTypes = {
	fadeInLeft: PropTypes.string,
	shake: PropTypes.string
};
