import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ house }) => {
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>Aunty</h1>
			<p>House: {house}</p>
			<section className="flex">
				<Cousin house={house} />
				<Cousin house={house} />
			</section>
		</div>
	);
};

export default Aunty;
