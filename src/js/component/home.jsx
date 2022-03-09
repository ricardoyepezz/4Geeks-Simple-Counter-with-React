import React from "react";
import { SecondsCounter } from "./secondsCounter.jsx";

//create your first component
const Home = () => {
	return (
		<div className="container mt-5">
			<SecondsCounter />
		</div>
	);
};

export default Home;
