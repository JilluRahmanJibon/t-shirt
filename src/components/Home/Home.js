import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";

const Home = () => {
	const [cart, setCart] = useState([]);
	const tshirts = useLoaderData();
	const [orderReview, setOrderReview] = useState();
	return (
		// home container
		<div className="bg-gray-400 grid grid-cols-5 gap-6  ld:pl-8">
			{/* products container  */}
			<div className="col-span-4 py-8">
				<h1 className="pb-8 text-center	 text-3xl font-semibold text-white">
					All your favoutit tShirt is here...Yay !{" "}
				</h1>
				<div className="grid grid-cols-3 lg:px-12  gap-10">
					{tshirts.map(tshirt => (
						<TShirt
							setOrderReview={setOrderReview}
							cart={cart}
							setCart={setCart}
							tshirt={tshirt}
							key={tshirt._id}
						/>
					))}
				</div>
			</div>
			{/* cart container  */}
			<div className="bg-orange-300 ">
				<Cart orderReview={orderReview} setCart={setCart} cart={cart} />
			</div>
		</div>
	);
};

export default Home;
