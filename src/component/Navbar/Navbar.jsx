import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const Navbar = () => {
	return (
		<div className="n-wrapper">
			<div className="n-left">
				<div className="n-name">Sherbaz Khan</div>
				<span>
					<Toggle />
				</span>
			</div>
			<div className="n-right">
				<div className="n-list">
					<ul style={{ listStyleType: "none" }}>
						<li>
							<Link to="services" spy={true} smooth={true}>
								Services
							</Link>
						</li>
						<li>
							<Link to="experience" spy={true} smooth={true}>
								Experience
							</Link>
						</li>
						<li>
							<Link to="certifications" spy={true} smooth={true}>
								Certifications
							</Link>
						</li>
						<li>
							<Link to="portfolio" spy={true} smooth={true}>
								Portfolio
							</Link>
						</li>
						{/* <li>
							<Link to="testimonial" spy={true} smooth={true}>
								Testimonials
							</Link>
						</li> */}
					</ul>
				</div>
				<Link to="contact" spy={true} smooth={true}>
					<button className="button n-button">Contact</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
