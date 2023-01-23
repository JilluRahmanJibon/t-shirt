import {
	ArrowRightCircleIcon,
	TrashIcon,
	XMarkIcon,
} from "@heroicons/react/24/solid";
// import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, orderReview }) => {
	// const [orderReview, setOrderReview] = useState();
	const handleRemoveItem = id => {
		const remainingCart = cart.filter(ts => ts._id !== id);
		setCart(remainingCart);
		toast("Remove Successfully...", {
			position: "bottom-right",
		});
	};
	const handleClearAll = () => {
		if (cart.length > 0) {
			setCart([]);
			toast("Clear all are successfully...", {
				position: "bottom-center",
			});
		}
	};
	// const handleOrderReview = () => {
	// 	if (cart.length > 0) {
	// 		setOrderReview("/orders");
	// 	}
	// };
	let message;
	if (cart.length === 0) {
		message = "Please Buy at least one item...!";
	}
	return (
		<div className="sticky top-2  pt-5">
			<h1 className="text-center text-2xl font-bold">Order Summary </h1>
			<div className="font-semibold flex flex-col gap-3 px-3 pt-4">
				{cart.map(product => (
					<div
						className="flex bg-gray-300 rounded-lg justify-between items-center "
						key={product._id}>
						<img
							className="w-16 rounded-md h-16"
							src={product.picture}
							alt=""
						/>
						<h1>{product.name} </h1>
						<button
							title="remove single item"
							className="bg-white text-bold mr-2 hover:text-red-400 "
							onClick={() => handleRemoveItem(product._id)}>
							<XMarkIcon className="w-5 h-5" />
						</button>
					</div>
				))}
				{message}
				{/* {cart.length === 0 ? "please buy at least 1 item" : undefined} */}
				{/* {cart.length === 0 && "please buy somthing"} */}
				{/* {cart.length === 0 || <p className="bg-red-400">or operator</p>} */}
			</div>
			<div className="pt-6 px-3">
				<button
					title="clear all items"
					onClick={handleClearAll}
					className={`flex w-full gap-1 bg-red-400 rounded-md text-gray-200 transition-all  py-2 justify-center text-lg font-semibold items-center ${
						cart.length > 0
							? " hover:bg-red-500 cursor-pointer hover:text-white"
							: "cursor-not-allowed "
					} `}>
					Clear <TrashIcon className="h-5 w-5" />
				</button>
				<Link to={orderReview}>
					<button
						// onClick={handleOrderReview}
						className={`flex w-full mt-3 gap-1 bg-red-400 rounded-md text-gray-200 transition-all  py-2 justify-center text-lg font-semibold items-center ${
							cart.length > 0
								? " hover:bg-red-500 cursor-pointer hover:text-white"
								: "cursor-not-allowed "
						} `}>
						Order Review <ArrowRightCircleIcon className="h-5  w-5" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Cart;
