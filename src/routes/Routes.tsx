import { RouteObject } from "react-router-dom";

import HelpLayout from "../layouts/HelpLayout";
import RootLayout from "../layouts/RootLayout";
import CareersLayout from "../layouts/CareersLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import FAQ from "../pages/help/FAQ";
import Contact, { contactAction } from "../pages/help/Contact";
import NotFound from "../pages/NotFound";
import Careers, { careersLoader } from "../pages/careers/Careers";
import CareerDetails, {
	careerDetailsLoader,
} from "../pages/careers/CareerDetails";
import CareersError from "../pages/careers/CareersError";

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
					{ path: "contact", element: <Contact />, action: contactAction },
				],
			},
			{
				path: "careers",
				element: <CareersLayout />,
				children: [
					{ path: "", element: <Careers />, loader: careersLoader },
					{
						path: ":id",
						element: <CareerDetails />,
						loader: careerDetailsLoader,
					},
				],
				errorElement: <CareersError />,
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export default routes;
