function Contact() {
	return (
		<div className="">
			<h3>Contact Us</h3>
			<form className="mt-[30px]">
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
			</form>
		</div>
	);
}

export default Contact;
