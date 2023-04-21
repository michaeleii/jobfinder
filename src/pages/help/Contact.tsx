import {
	ActionFunction,
	Form,
	redirect,
	useActionData,
} from "react-router-dom";

function Contact() {
	const data = useActionData() as { error?: string };
	return (
		<div className="">
			<h3>Contact Us</h3>
			<Form method="post" action="" className="mt-[30px]">
				{data && data.error && <p className="text-red-500">{data.error}</p>}
				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Your email:</span>
					</label>
					<input
						type="email"
						name="email"
						className="input input-bordered input-primary w-full max-w-xs"
						required
					/>
				</div>

				<div className="form-control w-full max-w-xs">
					<label className="label">
						<span className="label-text">Your message:</span>
					</label>
					<textarea
						name="message"
						className="text-area textarea-bordered textarea-primary textarea-xs w-full max-w-xs"
						required
					></textarea>
				</div>
				<div className="form-control w-full max-w-xs mt-5">
					<button className="btn btn-primary">Submit</button>
				</div>
			</Form>
		</div>
	);
}

export default Contact;

export const contactAction: ActionFunction = async ({ request }) => {
	const formData = await request.formData();
	const submission = {
		email: formData.get("email") as string,
		message: formData.get("message") as string,
	};
	console.log(submission);

	if (submission.message && submission.message.length < 10) {
		return { error: "Message must be at least 10 characters long." };
	}

	return redirect("/");
};
