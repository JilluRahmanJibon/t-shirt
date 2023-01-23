import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = ({ house }) => {
	const [money] = useContext(MoneyContext);
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>Uncle</h1>
			<p>House: {house}</p>
			<p>Money : {money}</p>
		</div>
	);
};

export default Uncle;
