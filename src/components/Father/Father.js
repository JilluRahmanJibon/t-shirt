import React from "react";
import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";

const Father = ({ house }) => {
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>Father</h1>
			<p>House: {house}</p>
			<div className="flex">
				<MySelf house={house} />
				<Brother house={house} />
				<Sister house={house} />
			</div>
		</div>
	);
};

export default Father;
