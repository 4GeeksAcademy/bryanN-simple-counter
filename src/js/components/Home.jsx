import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons' 

import Card from "./Card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center mt-4">
			<div className="container bg-dark text-white p-4">
				<div className="row d-flex align-items-stretch d-flex justify-content-center align-items-center">
					<div className="col">
						<Card numinfo={<FontAwesomeIcon icon={faClock}/>}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitSix}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitFive}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitFour}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitThree}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitTwo}/>
					</div>
					<div className="col">
						<Card numinfo={props.digitOne}/>
					</div>
				</div>
			</div>
			
		</div>
	);
};

export default Home;