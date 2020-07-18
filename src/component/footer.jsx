import React from "react";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";
import insta from "../img/insta.png"

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5 bg-secondary">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="px-3"
								href="https://github.com/tanshinayak"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/tanshi-nayak-955508176/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
							<a
								href="https://www.instagram.com/tanshi_nayak/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={insta} alt="" className="insta"/><br/>
								<i class="fa fa-instagram"></i>
							</a>
						</div>
					</div>
					<h5 className="pt-4 text-white">Made with &#10084;&#65039; Tanshi Nayak</h5>
					<h5 className="pt-4 text-white">&#169; 2020</h5>
				</div>
			</div>
		);
	}
}

export default Footer;
