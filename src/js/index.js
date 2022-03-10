//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { SecondsCounter } from "./component/secondsCounter.jsx";

let counter = 0;
setInterval(() => {
	//math.floor para redondear hacia abajo la división de counter entre xxx
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = counter;
	counter++;
	//render
	ReactDOM.render(
		<SecondsCounter
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
			numberFive={five}
		/>,
		document.querySelector("#app")
	);
}, 1000);
