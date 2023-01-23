import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Friend = () => {
	const [house, setHouse] = useContext(RingContext);
	const decrease = () => {
		setHouse(house - 1);
	};
	return (
		<div className="border-2 border-red-300 p-3 m-3">
			<h1>Friend</h1>
			<h1>House : {house}</h1>
			<button className="bg-red-300" onClick={decrease}>
				Decrease
			</button>
		</div>
	);
};

export default Friend;
