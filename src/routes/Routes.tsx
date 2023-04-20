import { RouteObject } from "react-router-dom";
import HelpLayout from "../layouts/HelpLayout";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/help/FAQ";
import Contact from "../pages/help/Contact";
import NotFound from "../pages/NotFound";
import CareersLayout from "../layouts/CareersLayout";
import Careers from "../pages/careers/Careers";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			{
				path: "help",
				element: <HelpLayout />,
				children: [
					{ path: "faq", element: <FAQ /> },
					{ path: "contact", element: <Contact /> },
				],
			},
			{
				path: "careers",
				element: <CareersLayout />,
				children: [{ path: "", element: <Careers /> }],
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export default routes;
