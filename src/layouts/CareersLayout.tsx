import { Outlet } from "react-router-dom";

function CareersLayout() {
	return (
		<div>
			<h2>Careers</h2>
			<p>
				Below is a list of all the exciting job opportunities that are currently
				available. Click on a job to see more details.
			</p>
			<Outlet />
		</div>
	);
}
export default CareersLayout;
