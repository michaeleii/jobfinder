import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "./components/Breadcrumbs";

function RootLayout() {
	return (
		<>
			<header className="py-[10px] px-[20px] bg-base-200">
				<nav className="navbar">
					<h1 className="mr-auto border-b-4 border-b-accent">JobFinder</h1>
					<ul className="menu menu-horizontal bg-base-300 rounded-box">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="about">About</NavLink>
						</li>
						<li>
							<NavLink to="careers">Careers</NavLink>
						</li>
						<li>
							<NavLink to="help">Help</NavLink>
						</li>
					</ul>
				</nav>
				<Breadcrumbs />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
export default RootLayout;
