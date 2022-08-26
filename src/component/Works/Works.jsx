import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import Administrator from "../../img/Administrator.png";
import PlatformDeveloper1 from "../../img/PlatformDeveloper1.png";
import JavaScripDeveloper1 from "../../img/JavaScripDeveloper1.png";
import OmniStudioConsultant from "../../img/OmniStudioConsultant.png";
import OmniStudioDeveloper from "../../img/OmniStudioDeveloper.png";
import { themeContext } from "../../Context";
// import Facebook from "../../img/Facebook.png";
// import Facebook from "../../img/Facebook.png";
// import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Works = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	return (
		<div className="works" id="certifications">
			{/* left side */}
			<div className="w-left">
				<div className="awesome">
					{/* dark Mode */}
					{/* <span style={{ color: darkMode ? "white" : "" }}> */}
					<span style={{ color: darkMode ? "white" : "" }}>
						Salesforce
					</span>
					<span>Certifications</span>
					<span>
						5x Certified Salesforce Developer. Will grab more
						certifications in upcoming months
						<br />
						and also looking forward for the CPQ Certification
					</span>
					<Link to="contact" spy={true} smooth={true}>
						<button className="button s-button">Hire Me</button>
					</Link>
					{/* <Link to="contact" smooth={true} spy={true}>
					</Link> */}
					<div
						className="blur s-blur1"
						style={{ background: "#ABF1FF94" }}
					></div>
				</div>

				{/* right side */}
			</div>
			<div className="w-right">
				<motion.div
					initial={{ rotate: 45 }}
					whileInView={{ rotate: 0 }}
					viewport={{ margin: "10px" }}
					transition={{ duration: 3.5, type: "spring" }}
					className="w-mainCircle"
				>
					<div className="w-secCircle">
						<img src={JavaScripDeveloper1} alt="" width={"100%"} />
					</div>
					<div className="w-secCircle">
						<img src={PlatformDeveloper1} alt="" width={"100%"} />
					</div>
					<div className="w-secCircle">
						<img src={Administrator} alt="" width={"100%"} />
					</div>{" "}
					<div className="w-secCircle">
						<img src={OmniStudioDeveloper} alt="" width={"100%"} />
					</div>
					<div className="w-secCircle">
						<img src={OmniStudioConsultant} alt="" width={"100%"} />
					</div>
				</motion.div>
				{/* background Circles */}
				<div className="w-backCircle blueCircle"></div>
				<div className="w-backCircle yellowCircle"></div>
			</div>
		</div>
	);
};

export default Works;
