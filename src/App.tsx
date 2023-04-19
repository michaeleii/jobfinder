import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
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
				<Routes>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
