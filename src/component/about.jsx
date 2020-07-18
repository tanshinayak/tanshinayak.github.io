import React from "react";
import myImage from "../img/profile.jpg";
import PropTypes from "prop-types";

export default class About extends React.Component {
	render() {
		return (
			<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}>
					About
				</h1>

				<div style={{ marginTop: 7 + "rem" }}>
					<div className="row">
						<img
							className="img-fluid col-12 col-lg-6 hidden pr-5 pl-5"
							src={myImage}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 450 + "px",
								width: 50 + "px"
							}}
						/>
						<h3 className=" col-12 col-lg-6 hidden" >
						I am a computer science student at University of Delhi, a Web Developer, a programmer ,a learner 
						and on my leisure time, an reader. 
						I always look for oppurtunities to improve my skills, explore new things as well as to implement my knowledge. Other than this, I love to play table tennis.
						There is a quote that always motivate me "Follow none but learn from everyone"
						</h3>
					</div>
				</div>
			</div>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
