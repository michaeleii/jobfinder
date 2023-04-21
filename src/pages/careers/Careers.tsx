import { Link, useLoaderData } from "react-router-dom";
import Career from "../../interfaces/Career";

function Careers() {
	const careers = useLoaderData() as Career[];
	return (
		<div className="flex flex-col gap-10">
			{careers.map((career) => (
				<div className="card bg-base-300 hover:bg-primary hover:text-primary-content transition-colors duration-500 ease-in-out shadow-xl">
					<div className="card-body">
						<Link to={`/careers/${career.id}`}>
							<h3>{career.title}</h3>
							<p>Based in {career.location}</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
export default Careers;

//loader function
export const careersLoader = async () => {
	try {
		const response = await fetch("http://localhost:4000/careers");
		return response.json();
	} catch (error) {
		throw new Error("Could not fetch the careers!");
	}
};
