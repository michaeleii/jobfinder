import { Params, useLoaderData } from "react-router-dom";
import Career from "../../interfaces/Career";

function CareerDetails() {
	const career = useLoaderData() as Career;

	return (
		<div className="card bg-base-300 hover:bg-primary hover:text-primary-content transition-colors duration-500 ease-in-out shadow-xl">
			<div className="card-body">
				<h2>{career.title}</h2>
				<p>Starting Salary: ${career.salary}</p>
				<p>Location: {career.location}</p>
				<p>{career.details}</p>
			</div>
		</div>
	);
}
export default CareerDetails;

export const careerDetailsLoader = async ({ params }: { params: Params }) => {
	const { id } = params;
	try {
		const response = await fetch(`http://localhost:4000/careers/${id}`);
		return response.json();
	} catch (error) {
		throw new Error("Could not find that career!");
	}
};
