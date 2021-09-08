import React from "react";
export const Card = () => {
	return (
		<React.Fragment>
			<div className="container">
				<div
					className="card"
					style={{
						width: "17.2rem",
						display: "inline-flex"
					}}>
					<img
						src="http://lorempixel.com/500/325/technics/"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							{
								"Some quick example text to build on the card title and makeup the bulk of the card's content."
							}
						</p>
						<a href="#" className="btn btn-primary text-center">
							Go somewhere
						</a>
					</div>
				</div>
				<div
					className="card"
					style={{ width: "17.2rem", display: "inline-flex" }}>
					<img
						src="http://lorempixel.com/500/325/sports/"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							{
								"Some quick example text to build on the card title and makeup the bulk of the card's content."
							}
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div
					className="card"
					style={{ width: "17.2rem", display: "inline-flex" }}>
					<img
						src="http://lorempixel.com/500/325/nightlife/"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							{
								"Some quick example text to build on the card title and makeup the bulk of the card's content."
							}
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
				<div
					className="card"
					style={{
						width: "17.2rem",
						display: "inline-flex"
					}}>
					<img
						src="http://lorempixel.com/500/325/city/"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							{
								"Some quick example text to build on the card title and makeup the bulk of the card's content."
							}
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
