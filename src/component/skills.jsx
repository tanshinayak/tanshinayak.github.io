import React from "react";
import PropTypes from "prop-types";
export default class Skills extends React.Component {
	render() {
		return (
            <div
				id="skills"
				className="content-containers container text-center mt-5">
				<h1 id="skills" className={+this.props.bounceLeft}>
					Skills
				</h1>
            <div
						className={
							"row text-center mt-5 pt-5" +
							this.props.tada
						}>
                            <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 90 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-70-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Mysql
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-70-bar"
								role="progressbar"
								style={{ width: 70 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-50-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								NodeJs
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								C++
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Version Control
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
						<div className="progress mb-3">
							<div
								className="progress-bar fill-50-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								JQuery
							</div>
						</div></div>
                        <div className="col-6 col-lg-6 col-sm-6">
                        <div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Data Structures
							</div>
						</div></div>
                        <div className="col-md-6 col-lg-6 col-sm-6">
                        <div className="progress mb-3">
							<div
								className="progress-bar fill-50-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Algorithms
							</div>
						</div></div>
					</div>
                    </div>
        );
                    }
                }

                Skills.propTypes = {
                    bounceLeft: PropTypes.string,
                    fadeInLeft: PropTypes.string,
                    fadeInRight: PropTypes.string,
                    fadeIn: PropTypes.string,
                    tada: PropTypes.string
                };
                
                    