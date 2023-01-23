import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";

export const RingContext = createContext("jus");
export const MoneyContext = createContext(555);
const Grandpa = () => {
	const [house, setHouse] = useState(1);
	const [money, setMoney] = useState(555);
	return (
		<RingContext.Provider value={[house, setHouse]}>
			<MoneyContext.Provider value={[money, setMoney]}>
				<div className="border-2 border-red-300 p-3 m-3">
					<h1>Grandpa</h1>
					<div className="flex">
						<Father house={house} />
						<Uncle house={house} />
						<Aunty house={house} />
					</div>
				</div>
			</MoneyContext.Provider>
		</RingContext.Provider>
	);
};

export default Grandpa;
