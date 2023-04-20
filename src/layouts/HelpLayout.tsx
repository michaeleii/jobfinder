import { NavLink, Outlet, Link } from "react-router-dom";

function HelpLayout() {
	return (
		<div>
			<h2>Website Help</h2>
			<p>
				Welcome to the JobFinder help section! We're here to provide you with
				all the assistance you need to make the most of our platform and find
				the job of your dreams. Whether you're new to job searching or a
				seasoned pro, we understand that the process can be overwhelming at
				times.
			</p>
			<p>
				If you have any questions or concerns, don't hesitate to reach out to
				our friendly support team. We're here to help you succeed!
			</p>
			<nav className="navbar justify-center">
				<ul className="menu menu-horizontal bg-base-300 rounded-box">
					<li>
						<NavLink to="faq">View the FAQ</NavLink>
					</li>
					<li>
						<NavLink to="contact">Contact Us</NavLink>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
}
export default HelpLayout;
