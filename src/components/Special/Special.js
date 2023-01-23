import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
	const [house, setHouse] = useContext(RingContext);
	console.log(house, setHouse);

	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>Special</h1>
			<p>
				House: <small>{house}</small>
			</p>
			<button className="bg-red-300" onClick={() => setHouse(house + 1)}>
				Increase
			</button>
		</div>
	);
};

export default Special;
