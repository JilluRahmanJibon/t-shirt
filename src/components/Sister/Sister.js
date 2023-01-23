import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Sister = ({ house }) => {
	const [money, setMoney] = useContext(MoneyContext);
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>My Sister</h1>
			<p>House: {house}</p>
			<p>Money: {money}</p>
			<button className="bg-red-300" onClick={() => setMoney(money + 1000)}>
				Add 1k
			</button>
		</div>
	);
};

export default Sister;
