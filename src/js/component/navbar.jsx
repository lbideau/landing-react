import React from "react";
import PropTypes from "prop-types";
export function NavBar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark p-1">
			<div className="container">
				<a className="navbar-brand text-white" href="#">
					<img className="img-nav" src={props.image} alt="" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex justify-content-end"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								{props.textHome}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.textAbout}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.textServices}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								{props.textContact}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

NavBar.propTypes = {
	image: PropTypes.string,
	textHome: PropTypes.string,
	textAbout: PropTypes.string,
	textServices: PropTypes.string,
	textContact: PropTypes.string
};
