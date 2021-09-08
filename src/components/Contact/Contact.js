import React from "react";
import { useState } from 'react';
import emailjs from 'emailjs-com';
import Home from "../Home/Home";
import contactImg from "../../images/contact.png";
import styled from "styled-components";
import {GiLoveMystery} from 'react-icons/gi';
import {ImLocation2} from 'react-icons/im';
import {BiPhoneCall, BiMailSend} from 'react-icons/bi';

const ContactWrapper = styled.div`
	& h2, p{
		color: #b4dd09;
		font-family: cursive;
	}
	& .box{
		background-color: #090909;
		color: white;
		border: 1px solid #c9ba12;
		margin: 10px auto;
	}
	& .btn-box{
		margin: 0 auto;
		text-align: center;
		& h4{
			color: #f4dd09;
			font-family: cursive;
			padding: 10px 0;
		}
	}
	& .send-btn{
		color: #090909;
		font-weight: bold;
		font-size: 22px;
		padding: 8px 30px;
		background-color: #f4dd09;
	}
	& .left-box{
		margin: 30px 0;
		& h4{
			color: #f4dd09;
			margin: 40px 0;
		& span{
			color: white;
			font-size: 18px;
		}
	}
	}
`;
const Contact = () => {
	const [toSend, setToSend] = useState({
    name: '',
		email: '',
    message: '',
		feedBack: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
		toSend.email = "";
		toSend.message = "";
		emailjs.sendForm("service_mz4gb13", "template_g9olrff", e.target, "user_ZgFHlCZjyBCn3PLP4z6ob")
      .then((res) => {
        const ifSuccess = {...toSend};
				ifSuccess.feedBack = `Dear ${ifSuccess.name}, Your message sent successfully, ${res.text}`;
				setToSend(ifSuccess);
      })
      .catch((err) => {
				const ifError = {...toSend};
				ifError.feedBack = `Dear ${ifError.name}, Your message is not sent, ${err}`;
				setToSend(ifError);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

	return (
		<div>
			<Home title="Contact Me" desc="" secImg={contactImg} />
			<ContactWrapper>
			<h2 className="text-center mt-5 mb-2">I'd <GiLoveMystery/> to help & Work</h2>
			<p className="text-center mb-5">I'm like to create things with fun, open minded, feel free to say hello</p>
				<div className="row">
					<div className="col-md-7">
						<form onSubmit={onSubmit}>
							<input type="text" placeholder="Name" name="name" className="form-control box" value={toSend.name}
							onChange={handleChange}/>
							<input type="email" placeholder="Email" name="email" className="form-control box" value={toSend.email}
							onChange={handleChange}/>
							<textarea name="message" id="messageBox" cols="30" rows="8" placeholder="Write your message" className="form-control box" value={toSend.message} onChange={handleChange}></textarea>
							<div className="btn-box">
								<input type="submit" value="Send" className="btn send-btn" />
								<h4>{toSend.feedBack}</h4>
							</div>
					</form>
					</div>
					<div className="col-md-5 left-box">
						<h4><ImLocation2/> <span>Dhaka, Bangladesh</span></h4>
						<h4><BiPhoneCall/> <span>+880 1848321597</span></h4>
						<h4><BiMailSend/> <span>minhazulabedinmithu@gmail.com</span></h4>
					</div>
				</div>
			</ContactWrapper>
		</div>
	);
};

export default Contact;
