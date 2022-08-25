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

import { themeContext } from "../../Context";
const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
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
					<a
						href="https://www.youtube.com/watch?v=07vsHXqCN2k"
						target="_blank"
						rel="noreferrer"
					>
						<h1>Demo of Salesforce WhatsApp Integration - LWC</h1>
						<img
							src={WhatsApp}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a
						href="https://sherbaz-lwc-ecommerce.herokuapp.com/"
						target="_blank"
						rel="noreferrer"
					>
						<h1>E-Commerce Webiste built - LWC OSS</h1>
						<img
							src={ECommerceNew}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a
						href="https://www.youtube.com/watch?v=bz-QLcEVeX8"
						target="_blank"
						rel="noreferrer"
					>
						<h1>Demo of Salesforce to Google Drive - LWC</h1>
						<img
							src={GoogleDrive}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>

				<SwiperSlide>
					<a
						href="https://www.youtube.com/watch?v=fW1zjuwWqb4"
						target="_blank"
						rel="noreferrer"
					>
						<h1>Demo of Salesforce to Google Sheet - LWC</h1>
						<img
							src={GoogleSheet}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Paypal Advance Checkout Integration - LWC</h1>
					<img
						src={Paypal}
						alt=""
						style={{ cursor: "pointer" }}
						height={250}
						width={380}
					/>
				</SwiperSlide>
				<SwiperSlide>
					<h1>Stripe Integration - LWC</h1>
					<img
						src={Stripe}
						alt=""
						style={{ cursor: "pointer" }}
						height={250}
						width={380}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<a
						href="https://www.youtube.com/watch?v=U2--wgtNIEI"
						target="_blank"
						rel="noreferrer"
					>
						<h1>Demo of Salesforce to CSV Downloader - LWC</h1>
						<img
							src={CsvDownloader}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>
				<SwiperSlide>
					<a
						href="https://www.udemy.com/user/sherbaz-42/"
						target="_blank"
						rel="noreferrer"
					>
						<h1>Udemy Courses on Salesforce Flows</h1>
						<img
							src={Flows}
							alt=""
							style={{ cursor: "pointer" }}
							height={250}
							width={380}
						/>
					</a>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
