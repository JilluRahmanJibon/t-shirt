import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Error from "../components/Error/Error";
import Grandpa from "../components/Grandpa/Grandpa";
import Home from "../components/Home/Home";
import Orders from "../components/Orders/Orders";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				loader: () => fetch("tshirts.json"),
				element: <Home />,
			},
			{
				path: "/home",
				loader: () => fetch("tshirts.json"),
				element: <Home />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "grandpa",
				element: <Grandpa />,
			},
		],
	},
	{
		path: "*",
		element: <Error />,
	},
]);
