import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div>
			<h2>Oops! We couldn't find the page you were looking for.</h2>
			<p>
				This could be due to a number of reasons, such as a mistyped URL or a
				page that has been moved or deleted. Please check the URL you entered
				and try again.
			</p>
			<p>
				If you believe you've reached this page in error, please contact our
				support team for assistance. We'll do our best to help you find what
				you're looking for.
			</p>
			<p>
				Click{" "}
				<Link className="underline hover:text-accent" to="/">
					here
				</Link>{" "}
				to return to the homepage.
			</p>
		</div>
	);
}
export default NotFound;
