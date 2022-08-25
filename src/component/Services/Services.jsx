import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Services = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1,
		type: "spring",
	};

	const handleClick = (e) => {
		alert(
			"Sorry CV is not here to download. Updated CV will be available for downloading soon."
		);
	};

	return (
		<div className="services" id="services">
			<div className="s-left">
				<span style={{ color: darkMode ? "white" : "black" }}>
					My Awesome
				</span>
				<span>
					<span className="eachCharacterInServices">S</span>
					<span className="eachCharacterInServices">e</span>
					<span className="eachCharacterInServices">r</span>
					<span className="eachCharacterInServices">v</span>
					<span className="eachCharacterInServices">i</span>
					<span className="eachCharacterInServices">c</span>
					<span className="eachCharacterInServices">e</span>
					<span className="eachCharacterInServices">s</span>
				</span>
				<span>
					Certified Salesforce Developer with expertise in Admin and
					Development <br />
					Avaibale for part-time work specifically for Custom
					Development in Salesforce
				</span>
				<button
					className="button s-button"
					onClick={(e) => handleClick(e)}
				>
					Download CSV
				</button>
				<div
					className="blur s-blur1"
					style={{ background: "#ABF1FF94" }}
				></div>
			</div>

			<div className="s-right">
				{/* <div style={{ left: "24rem" }}></div> */}
				<motion.div
					initial={{ left: "30rem" }}
					whileInView={{ left: "24rem" }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Salesforce Admin"}
						detail={
							'Profie, Groups, Sharing Settings, Congifuration, Relationship, Schema, Assignment Rules, and "FLOWS" 😍'
						}
					/>
				</motion.div>
				{/* <div style={{ top: "10rem", left: "-4rem" }}></div> */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "-4rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Salesforce Development"}
						detail={
							'Apex, VF Pages, Integrations, Batch Classes, Schedule Classes, Web Services, Slds, and my fav "LWC" 😍'
						}
						specialSkill={"lwc"}
					/>
				</motion.div>
				{/* <div style={{ top: "21rem", left: "17rem" }}></div> */}
				<motion.div
					initial={{ top: "21rem", left: "25rem" }}
					whileInView={{ left: "17rem" }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"Salesforce Training"}
						detail={
							"Youtube Channel: SFDC Khan, Udmey Courses: Sherbaz Khan, Salesforce Basics to Advance"
						}
						specialSkill={"lwc"}
					/>
				</motion.div>
				<div
					className="blur s-blur2"
					style={{ background: "var(--purple)" }}
				></div>
			</div>
		</div>
	);
};

export default Services;
