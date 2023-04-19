import RootLayout from "../layouts/RootLayout";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
		],
	},
];

export default routes;
