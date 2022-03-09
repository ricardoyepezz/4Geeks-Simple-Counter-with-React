//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SecondsCounter } from "./component/secondsCounter.jsx";

//render your react application
let counter = 0;
setInterval(() => {
	counter += 1;
	console.log(counter);
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.querySelector("#app")
	);
}, 1000);
