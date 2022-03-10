import PropTypes from "prop-types";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export const SecondsCounter = (props) => {
	return (
		<div className="bigContainer">
			<div className="icon">
				<FontAwesomeIcon icon={faClock} />
			</div>
			{/* para evitar dos digitos en un div utilizo el residuo de la división de cada numero entre 10 */}
			<div>{props.numberFive % 10}</div>
			<div>{props.numberFour % 10}</div>
			<div>{props.numberThree % 10}</div>
			<div>{props.numberTwo % 10}</div>
			<div>{props.numberOne % 10}</div>
		</div>
	);
};

SecondsCounter.propTypes = {
	numberFive: PropTypes.number,
	numberFour: PropTypes.number,
	numberThree: PropTypes.number,
	numberTwo: PropTypes.number,
	numberOne: PropTypes.number,
};
