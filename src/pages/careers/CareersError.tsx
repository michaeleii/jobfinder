import { Link, useRouteError } from "react-router-dom";

function CareersError() {
	const err = useRouteError() as any;
	return (
		<div className="text-center">
			<h2>Oops!</h2>
			<p>{err.message}</p>
			<Link to={"/"} className="underline">
				Back to the homepage
			</Link>
		</div>
	);
}
export default CareersError;
