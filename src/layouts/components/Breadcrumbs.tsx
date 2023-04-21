import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
	const location = useLocation();
	let currentLink = "";
	const crumbs = location.pathname
		.split("/")
		.filter((crumb) => crumb !== "")
		.map((crumb) => {
			currentLink += `/${crumb}`;
			return (
				<div
					key={crumb}
					className="my-[20px] inline-block after:content-['>'] after:mx-[5px] last:after:content-none"
				>
					<Link to={currentLink} className="underline hover:text-accent">
						{crumb}
					</Link>
				</div>
			);
		});
	return <div className="ml-[20px]">{crumbs}</div>;
}
export default Breadcrumbs;
