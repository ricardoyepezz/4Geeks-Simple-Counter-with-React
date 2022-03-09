import React from "react";

export const SecondsCounter = (props) => {
	return (
		<>
			<i clasname="fas fa-clock"></i>
			<label>0</label>
			<label>0</label>
			<label>0</label>
			<label>0</label>
			<label>0</label>
			<label>{props.counter}</label>
		</>
	);
};
