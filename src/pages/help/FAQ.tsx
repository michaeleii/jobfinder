function FAQ() {
	return (
		<div className="faq flex flex-col gap-5">
			<h3>Frequently Asked Questions</h3>

			<div className="card bg-[rgba(0,0,0,0.4)] hover:bg-primary transition-colors duration-500 ease-in-out shadow-xl">
				<div className="card-body">
					<p className="card-title">
						<strong>What is JobFinder, and how does it work?</strong>
					</p>
					<p className="pt-0 m-0">
						JobFinder is a job search website that helps connect job seekers
						with employers who are looking for qualified candidates. JobFinder
						works by aggregating job listings from various sources across the
						web and presenting them in a user-friendly format that makes it easy
						to search and apply for jobs.
					</p>
				</div>
			</div>

			<div className="card bg-[rgba(0,0,0,0.4)] hover:bg-primary transition-colors duration-500 ease-in-out shadow-xl">
				<div className="card-body">
					<p className="card-title">
						<strong>
							Is JobFinder free to use for job seekers, or are there any fees?
						</strong>
					</p>
					<p className="pt-0 m-0">
						JobFinder is completely free to use for job seekers. There are no
						hidden fees or charges to use the platform.
					</p>
				</div>
			</div>

			<div className="card bg-[rgba(0,0,0,0.4)] hover:bg-primary transition-colors duration-500 ease-in-out shadow-xl">
				<div className="card-body">
					<p className="card-title">
						<strong>
							How do I search for jobs on JobFinder, and what search filters are
							available?
						</strong>
					</p>
					<p className="pt-0 m-0">
						To search for jobs on JobFinder, simply enter your desired job title
						or keywords and your location into the search bar. You can then use
						the various filters available to refine your search results by job
						type, location, salary range, and more.
					</p>
				</div>
			</div>

			<div className="card bg-[rgba(0,0,0,0.4)] hover:bg-primary transition-colors duration-500 ease-in-out shadow-xl">
				<div className="card-body">
					<p className="card-title">
						<strong>
							How does JobFinder protect my personal information and keep my job
							search confidential?
						</strong>
					</p>
					<p className="pt-0 m-0">
						JobFinder takes the privacy and security of our users very
						seriously. We use industry-standard encryption technology to protect
						your personal information, and we will never share your information
						with third parties without your explicit consent.
					</p>
				</div>
			</div>

			<div className="card bg-[rgba(0,0,0,0.4)] hover:bg-primary transition-colors duration-500 ease-in-out shadow-xl">
				<div className="card-body">
					<p className="card-title">
						<strong>
							How can I contact JobFinder if I have a question or concern that
							isn't addressed in the FAQ section?
						</strong>
					</p>
					<p className="m-0">
						If you have a question or concern that isn't addressed in the FAQ
						section, you can contact JobFinder customer support by emailing
						support@jobfinder.com or by using the contact form on our website.
						Our support team is available 24/7 to assist you with any issues you
						may encounter.
					</p>
				</div>
			</div>
		</div>
	);
}

export default FAQ;
