import React from "react";
import { NavBar } from "./navbar.jsx";
import { JumboTrom } from "./jumbotrom.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<React.Fragment>
			<NavBar
				image="https://leshliebideau.com/wp-content/uploads/2021/03/cropped-LOGOLB-1.png"
				textHome="Home"
				textAbout="About"
				textServices="Services"
				textContact="Contact"
			/>
			<JumboTrom />
			<Card />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
