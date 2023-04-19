import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import CsvDownloader from "../../img/CsvDownloader.jpg";
import ECommerceNew from "../../img/ECommerceNew.png";
import Flows from "../../img/Flows.png";
import GoogleDrive from "../../img/GoogleDrive.jpg";
import GoogleSheet from "../../img/GoogleSheet.jpg";
import Paypal from "../../img/Paypal.png";
import WhatsApp from "../../img/WhatsApp.jpg";
import Stripe from "../../img/Stripe.png";
import Proshop from "../../img/Proshop.png";
import EasyToConfigure from "../../img/EasyToConfigure.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	const handleClick = (e) => {
		e.preventDefault();
		alert(
			"Sorry this website is not public now as HEROKU is NOT FREE anymore."
		);
	};

	return (
		<div className="portfolio" id="portfolio">
			{/* heading */}
			{/* <span style={{color: darkMode?'white': ''}}>Recent Projects</span> */}
			<span style={{ color: darkMode ? "white" : "" }}>
				Few Recent Projects
			</span>
			<span>Portfolio</span>

			{/* slider */}
			<Swiper
				spaceBetween={30}
				slidesPerView={3}
				grabCursor={true}
				className="portfolio-slider"
			>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.youtube.com/watch?v=jBv7gu5rXTw"
							target="_blank"
							rel="noreferrer"
							style={{ width: "100%", height: "100%" }}
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={EasyToConfigure}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										Activate/Deactive Trigger, Flow & VR
										(LWC APP)
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.youtube.com/watch?v=07vsHXqCN2k"
							target="_blank"
							rel="noreferrer"
							style={{ width: "100%", height: "100%" }}
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={WhatsApp}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										Salesforce & WhatsApp Real Time
										Integration - LWC
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://sherbaz-lwc-ecommerce.herokuapp.com/"
							target="_blank"
							rel="noreferrer"
							style={{ zIndex: "10" }}
							onClick={handleClick}
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={ECommerceNew}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										E-Commerce Webiste with Stripe - LWC OSS
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://sherbaz148proshop.herokuapp.com/"
							target="_blank"
							rel="noreferrer"
							onClick={handleClick}
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={Proshop}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										E-Commerce Webiste with Stripe - REACT
										and NODE
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.youtube.com/watch?v=bz-QLcEVeX8"
							target="_blank"
							rel="noreferrer"
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={GoogleDrive}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										Salesforce & Google Drive Integration -
										LWC
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.youtube.com/watch?v=fW1zjuwWqb4"
							target="_blank"
							rel="noreferrer"
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={GoogleSheet}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										Salesforce & Google Sheet Integration -
										LWC
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<div className="flip-box-inner">
							<div className="flip-box-front">
								<img
									src={Paypal}
									alt=""
									height={250}
									width={380}
								/>
							</div>
							<div className="flip-box-back">
								<span>
									Paypal Advance Checkout Integration - LWC
									and VF Page
								</span>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<div className="flip-box-inner">
							<div className="flip-box-front">
								<img
									src={Stripe}
									alt=""
									style={{ cursor: "pointer" }}
									height={250}
									width={380}
								/>
							</div>
							<div className="flip-box-back">
								<span>
									Stripe Integration - LWC and VF Page
								</span>
							</div>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.youtube.com/watch?v=U2--wgtNIEI"
							target="_blank"
							rel="noreferrer"
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={CsvDownloader}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>
										Export Salesforce Records to CSV - LWC
									</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="flip-box">
						<a
							href="https://www.udemy.com/user/sherbaz-42/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="flip-box-inner">
								<div className="flip-box-front">
									<img
										src={Flows}
										alt=""
										height={250}
										width={380}
									/>
								</div>
								<div className="flip-box-back">
									<span>My Udemy Courses - FLOWS</span>
								</div>
							</div>
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
