import React from "react";
import Special from "../Special/Special";

const MySelf = ({ house }) => {
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>My Self</h1>
			<p>House: {house}</p>
			<section>
				<Special />
			</section>
		</div>
	);
};

export default MySelf;
