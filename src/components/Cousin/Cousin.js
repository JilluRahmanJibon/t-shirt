import React from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ house }) => {
	return (
		<div className="border-2 border-red-300 m-3 p-3">
			<h1>Cousin</h1>
			<p>House: {house}</p>
			<section>
				<Friend />
			</section>
		</div>
	);
};

export default Cousin;
