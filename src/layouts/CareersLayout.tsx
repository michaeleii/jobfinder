import { Outlet } from "react-router-dom";

function CareersLayout() {
	return (
		<div>
			<h2>Careers</h2>
			<p>
				Welcome to the JobFinder Careers page! Below is a list of all the
				exciting job opportunities that are currently available.
			</p>
			<Outlet />
		</div>
	);
}
export default CareersLayout;
