import React from "react";
import weather from "../img/weather.jpg";
import tictactoe from "../img/tictactoe.png";
import calculator from "../img/calculaor.png";
import pomo from "../img/pomo.jpg";
import gif from "../img/gif.jpg"
import PropTypes from "prop-types";
import "./project.css"

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
				</div>
				<div className="row">
					<div className="col-4  content">
						<img src={weather} alt="" className="image"/>
						<div className="middle">
							<h1>Weather App</h1>
						<a href="https://tanshinayak.github.io/weather"><button className="btn btn-dark ml-auto mr-auto mt-5">View in browser</button></a>
						<br/>
						<a href="https://github.com/tanshinayak/weather"><button className="btn btn-dark ml-auto mr-auto mt-3">View Code</button></a>
                        </div>
					</div>
					<div className="col-4 content">
						<img src={calculator} alt="" className="image"/>
						<div className="middle">
							<h1>Calculator</h1>
						<a href="https://tanshinayak.github.io/calculator"><button className="btn btn-dark ml-auto mr-auto mt-5">View in browser</button></a>
						<br/>
						<a href="https://github.com/tanshinayak/calculator"><button className="btn btn-dark ml-auto mr-auto mt-3">View Code</button></a>
                        </div>
					</div>
					<div className="col-4 content">
						<img src={tictactoe} alt="" className="image"/>
						<div className="middle">
							<h1>Tic Tac Toe</h1>
						<a href="https://tanshinayak.github.io/TicTacToe"><button className="btn btn-dark ml-auto mr-auto mt-5">View in browser</button></a>
						<br/>
						<a href="https://github.com/tanshinayak/TicTacToe"><button className="btn btn-dark ml-auto mr-auto mt-3">View Code</button></a>
                        </div>
					</div>
					<div className="col-4 content mt-3">
						<img src={pomo} alt="" className="image"/>
						<div className="middle">
							<h1>Pomodoro Clock</h1>
						<a href="https://tanshinayak.github.io/Pomodoro_clock"><button className="btn btn-dark ml-auto mr-auto mt-5">View in browser</button></a>
						<br/>
						<a href="https://github.com/tanshinayak/Pomodoro_clock"><button className="btn btn-dark ml-auto mr-auto mt-3">View Code</button></a>
                        </div>
					</div>
					<div className="col-4 content mt-3">
						<img src={gif} alt="" className="image"/>
						<div className="middle">
							<h1>Giphy App</h1>
						<a href="https://tanshinayak.github.io/giphy"><button className="btn btn-dark ml-auto mr-auto mt-5">View in browser</button></a>
						<br/>
						<a href="https://github.com/tanshinayak/giphy"><button className="btn btn-dark ml-auto mr-auto mt-3">View Code</button></a>
                        </div>
					</div>
				</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
