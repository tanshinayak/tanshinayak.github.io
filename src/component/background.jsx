import React from "react";
import PropTypes from "prop-types";
import WOW from "wowjs";
export default class Background extends React.Component {
	componentDidMount() {
		document.title="Tanshi Nayak"
		new WOW.WOW().init();
	}

	render() {
		return (
			<div id="my-background" className="background">
				<div className="top-container flex text-center">
					<h1 className="text-light heading">
						Hello, I&apos;m Tanshi Nayak
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"btn" + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						<b>View My Work</b>
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
