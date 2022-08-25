/* eslint-disable no-lone-blocks */
import React, { useContext, useState } from "react"; // useRef,
import "./Contact.css";
// import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	// const form = useRef();
	const [done, setDone] = useState(false);

	// Case Data preparation
	const submitForm = (e) => {
		e.preventDefault();
		// console.log(e.target);
		const formElements = Array.from(e.target.elements);

		// Web to Case function
		let customHiddenIframeName = "JLA_API";
		if (!document.getElementById(customHiddenIframeName)) {
			let theiFrame = document.createElement("iframe");
			theiFrame.id = customHiddenIframeName;
			theiFrame.name = customHiddenIframeName;
			theiFrame.src = "about:blank";
			theiFrame.style.display = "none";
			document.body.appendChild(theiFrame);
		}

		formElements["retURL"] = "http://127.0.0.1";
		let form = document.createElement("form");
		form.method = "POST";
		form.action =
			"https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8";
		form.setAttribute("target", customHiddenIframeName);
		formElements.forEach((element) => {
			console.log(element);
			let theInput = document.createElement("input");
			theInput.name = element.name;
			theInput.value = element.value;
			theInput.setAttribute("type", "hidden");
			form.appendChild(theInput);
		});
		document.body.appendChild(form);
		form.submit();
		setDone(true);
		e.target.reset();
	};

	return (
		<div className="contact-form" id="contact">
			<div className="w-left">
				<div className="awesome">
					<span style={{ color: darkMode ? "white" : "" }}>
						Get in Touch
					</span>
					<span>Contact me</span>
					<div
						className="blur s-blur1"
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>
			</div>
			{/* right side form */}
			<div className="c-right">
				<form
					// ref={form}
					onSubmit={submitForm}
					// action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
					// method="POST"
				>
					<input type="hidden" name="orgid" value="00D5f000005tQbQ" />
					<input type="hidden" name="retURL" value="localhost:3000" />
					<input
						type="hidden"
						id="external"
						name="external"
						value="1"
					/>
					<input
						id="subject"
						maxLength="80"
						name="subject"
						size="20"
						type="text"
						className="user"
						placeholder="Subject"
					/>
					<input
						type="text"
						name="name"
						className="user"
						placeholder="Name"
					/>
					<input
						type="email"
						name="email"
						className="user"
						placeholder="Email"
					/>
					<input
						id="phone"
						maxLength="40"
						name="phone"
						size="20"
						type="text"
						placeholder="Mobile Number"
						className="user"
					/>
					<textarea
						name="description"
						className="user"
						placeholder="Message"
					/>
					<input type="submit" value="Send" className="button" />
					<span>{done && "Thanks for Contacting me"}</span>
					<div
						className="blur c-blur1"
						style={{ background: "var(--purple)" }}
					></div>
				</form>
			</div>
		</div>
	);
};

export default Contact;

{
	/*
    const sendEmail = (e) => {
		e.preventDefault();
		e.target.reset();
		// emailjs
		// 	.sendForm(
		// 		"service_0ppy5wn",
		// 		"template_n6ohgzo",
		// 		form.current,
		// 		"q0d4HLZtnOrrSbfsG"
		// 		// "Ny9GeWK-0-bupkFP9ZPFW"
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 			setDone(true);
		// 			// form.clear();
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 		}
		// 	);
		setDone(true);
	};
	// const handleChange = (e) => {
	// 	console.log(e.target.value);
	// 	console.log(e.target.name);
	// };
     
    <form
					action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8"
					method="POST"
				>
					<input type="hidden" name="orgid" value="00D5f000005tQbQ" />
					<input
						type="hidden"
						name="retURL"
						value="https://localhost:3000"
					/>
					<input
						type="hidden"
						id="external"
						name="external"
						value="1"
					/>

					<input
						id="subject"
						maxLength="80"
						name="subject"
						size="20"
						type="text"
						className="user"
						placeholder="Subject"
					/>

					<input
						type="text"
						name="name"
						className="user"
						placeholder="Name"
					/>
					<input
						type="email"
						name="email"
						className="user"
						placeholder="Email"
					/>
					<input
						id="phone"
						maxLength="40"
						name="phone"
						size="20"
						type="text"
						placeholder="Mobile Number"
						className="user"
					/>
					<textarea
						name="message"
						className="user"
						placeholder="Message"
						rows="4"
					/>

					<button
						type="submit"
						value="Send"
						className="button button-submit"
					>
						Send
					</button>
					<span>{done && "Thanks for Contacting me"}</span>
					<div
						className="blur c-blur1"
						style={{ background: "var(--purple)" }}
					></div>
				</form> */
}
