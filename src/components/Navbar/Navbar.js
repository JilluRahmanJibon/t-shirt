import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
	return (
		<div className="shadow-xl">
			<div className="py-4 grid grid-cols-2 md:w-11/12 mx-auto ">
				<Link to="/">
					<h1 className="text-3xl font-bold">
						<span className="text-red-400 font-bold">T</span>
						-Shirt
					</h1>
				</Link>
				<div className="text-center">
					<NavLink
						className={`text-gray-500 hover:text-red-400 transition-all mr-3  font-bold `}
						to="/home">
						Home
					</NavLink>
					<NavLink
						className="text-gray-500 hover:text-red-400 transition-all mr-3 font-bold"
						to="/orders">
						Orders
					</NavLink>

					<NavLink
						className="text-gray-500 hover:text-red-400 transition-all mr-3 font-bold"
						to="/grandpa">
						Grandpa
					</NavLink>
					<NavLink
						className="text-gray-500 hover:text-red-400 transition-all mr-3 font-bold"
						to="/about">
						About
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
