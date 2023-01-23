import React from "react";

const Brother = ({ house }) => {
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			{" "}
			<h1>My Brother</h1>
			<p>House: {house}</p>
		</div>
	);
};

export default Brother;
