import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Youtube from "../../img/Youtube.png";
import Udemy from "../../img/Udemy.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import MyPicTransparent from "../../img/MyPicTransparent.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 2,
		type: "spring",
	};

	let socialMediaLinks = {
		target: "_blank",
		github: "https://github.com/SherbazKhan148",
		linkedin: "https://www.linkedin.com/in/sherbazkhan148/",
		insta: "https://www.instagram.com/sherbazkhan148/",
		youtube: "https://www.youtube.com/c/SFDCKhan",
		udemy: "https://www.udemy.com/user/sherbaz-42/",
	};
	return (
		<div className="intro">
			<div className="i-left">
				<div className="i-name">
					<span style={{ color: darkMode ? "white" : "" }}>
						Hy! I Am
					</span>
					<span id="nameForBigScreen">
						<span className="eachCharacterInName">S</span>
						<span className="eachCharacterInName">h</span>
						<span className="eachCharacterInName">e</span>
						<span className="eachCharacterInName">r</span>
						<span className="eachCharacterInName">b</span>
						<span className="eachCharacterInName">a</span>
						<span className="eachCharacterInName">z</span>
						<span className="eachCharacterInName">&nbsp;</span>
						<span className="eachCharacterInName">K</span>
						<span className="eachCharacterInName">h</span>
						<span className="eachCharacterInName">a</span>
						<span className="eachCharacterInName">n</span>
					</span>

					<span>
						Salesforce Developer with expertise in Custom
						Development including LWC, APEX, and VF PAGES.
						<br /> Known as <b>SFDC Khan</b>
					</span>
				</div>
				<Link to="contact" spy={true} smooth={true}>
					<button className="button i-button">Hire Me</button>
				</Link>
				<div className="i-icons">
					<a
						href={socialMediaLinks.github}
						target={socialMediaLinks.target}
					>
						<img src={Github} alt="" />
					</a>
					<a
						href={socialMediaLinks.linkedin}
						target={socialMediaLinks.target}
					>
						<img src={LinkedIn} alt="" />
					</a>
					<a
						href={socialMediaLinks.insta}
						target={socialMediaLinks.target}
					>
						<img src={Instagram} alt="" />
					</a>
					<a
						href={socialMediaLinks.youtube}
						target={socialMediaLinks.target}
					>
						<img src={Youtube} alt="" height={90} width={87} />
					</a>
					<a
						href={socialMediaLinks.udemy}
						target={socialMediaLinks.target}
					>
						<img src={Udemy} alt="" height={90} width={87} />
					</a>
				</div>
			</div>
			<div className="i-right">
				<img src={Vector1} alt="" />
				<img src={Vector2} alt="" />
				<img src={MyPicTransparent} alt="" width={285} height={406} />
				<motion.img
					initial={{ left: "-36%" }}
					whileInView={{ left: "-24%" }}
					transition={transition}
					src={glassesimoji}
					alt=""
				/>
				<motion.div
					initial={{ top: "-4%", left: "74%" }}
					whileInView={{ left: "58%" }}
					transition={transition}
					className="floating-div"
				>
					<FloatingDiv
						image={crown}
						txt1="Salesforce"
						txt2="Developer"
					/>
				</motion.div>
				{/* <div style={{ top: "-4%", left: "68%" }}></div> */}
				{/* <div style={{ top: "19rem", left: "-3rem" }}></div> */}
				<motion.div
					initial={{ left: "9rem", top: "18rem" }}
					whileInView={{ left: "0rem" }}
					transition={transition}
					className="floating-div"
				>
					<FloatingDiv
						image={thumbup}
						txt1="Pakistan Dreamin 2022"
						txt2="Excellence Award"
						secondDiv="true"
					/>
				</motion.div>
				{/* BLUR DIVS */}
				<div
					className="blur"
					style={{ background: "rgb(238,210,255)" }}
				></div>
				<div
					className="blur"
					style={{
						background: "#C1F5FF",
						top: "17rem",
						width: "21rem",
						height: "11rem",
						left: "-9rem",
					}}
				></div>
			</div>
		</div>
	);
};

export default Intro;
