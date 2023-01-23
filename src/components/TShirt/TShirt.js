import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TShirt = ({ tshirt, cart, setCart, setOrderReview }) => {
	const { name, picture, price } = tshirt;
	const handleCart = tshirt => {
		const exists = cart.find(ts => ts._id === tshirt._id);
		if (exists) {
			toast("Yay ...  You are already added this product...", {
				position: "top-center",
			});
		} else {
			const newCart = [...cart, tshirt];
			setCart(newCart);
			setOrderReview("/orders");
			toast("Yay ...  You are added this product...", {
				position: "top-center",
			});
		}
	};
	return (
		<div className="bg-gray-200  rounded-lg ">
			<img className="w-full h-[400px] rounded-2xl p-2" src={picture} alt="" />
			<div className="text-left px-5">
				<p className="text-xl font-semibold">{name}</p>
				<p>
					<span>Price: </span>{" "}
					<span className="font-bold text-red-400">${price}</span>
				</p>
			</div>
			<div className="pt-4">
				<button
					onClick={() => handleCart(tshirt)}
					className="bg-red-300 w-full py-3 flex justify-center items-center gap-3 rounded-b-lg font-semibold hover:bg-red-400 hover:text-white transition-all">
					Add To Cart <ShoppingCartIcon className="h-5 w-5 text-blue-600" />
				</button>
			</div>
			<ToastContainer />
		</div>
	);
};

export default TShirt;
