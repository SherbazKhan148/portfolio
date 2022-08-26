import React from "react";
// import crown from "../../img/crown.png";
import "./FloatingDiv.css";
const FloatingDiv = ({ image, txt1, txt2, secondDiv }) => {
	return (
		<div
			className="floatingdiv"
			style={{ minWidth: secondDiv ? "324px" : "" }}
		>
			<img src={image} alt="" />
			<span>
				<b>{txt1}</b>
				<br />
				{txt2}
			</span>
		</div>
	);
};

export default FloatingDiv;
