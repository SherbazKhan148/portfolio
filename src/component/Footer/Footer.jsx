import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
	return (
		<div className="footer">
			<img src={Wave} alt="" style={{ width: "100%" }} />
			<div className="f-content">
				<span>sherbazkhan1408@gmail.com</span>
				<div className="f-icons">
					<Insta color="white" size={"3rem"} />
					<Facebook color="white" size={"3rem"} />
					<Gitub color="white" size={"3rem"} />
				</div>
				{/* <div style={{ textAlign: "center" }}>&copy; Sherbaz Khan</div> */}
			</div>
		</div>
	);
};

export default Footer;
