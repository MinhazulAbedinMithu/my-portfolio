import React from "react";
import styled from "styled-components";
import bgImg from "../../images/bg.jpg";

const Banner = styled.div`
	background-image: url(${(props) => props.ImgUrl});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	position: relative;
	z-index: 0;

	&:before {
		background: rgba(0, 0, 0, 0.65);
		content: "";
		height: 100%;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: -1;
	}

	& .banner-cont {
		padding: 15px;
		& h2 {
			color: white;
			font-weight: 800;
			font-family: "Carter One", cursive;
			font-size: 70px;
			margin: 0;
		}
		& p {
			color: pink;
		}
		& button {
			background-color: yellow;
			color: rgb(1, 0, 82);
			font-weight: bold;
			margin-top: 25px;
		}
	}
	& .banner-img {
		padding-top: 10px;
		height: 250px;
		width: 250px;
		& img {
			height: 100%;
			width: 100%;
		}
	}
`;

const Home = (props) => {
	const { title, secImg } = props;
	return (
		<div>
			<Banner className="container" ImgUrl={bgImg}>
				<div className="row">
					<div className="col-md-8 col-12 banner-cont">
						<h2>{title}</h2>
						<p>I build ios and android application.</p>
						<button className="btn btn-dark">Explore Now</button>
					</div>
					<div className="col-md-4 col-12 banner-img">
						<img src={secImg} alt="my image" />
					</div>
				</div>
			</Banner>
		</div>
	);
};

export default Home;
