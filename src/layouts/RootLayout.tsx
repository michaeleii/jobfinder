import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
	return (
		<>
			<header className="py-[10px] px-[20px] bg-[rgb(0,0,0,0.4)]">
				<nav className="navbar">
					<h1 className="mr-auto border-b-4 border-b-primary">Job Finder</h1>
					<ul className="menu menu-horizontal">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="about">About</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
export default RootLayout;