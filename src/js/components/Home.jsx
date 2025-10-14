import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="text-center">


			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>

			<div className="container">
				<div className="row">
					<div className="col">
						{props.digitSix}
					</div>
					<div className="col">
						{props.digitFive}
					</div>
					<div className="col">
						{props.digitFour}
					</div>
					<div className="col">
						{props.digitThree}
					</div>
					<div className="col">
						{props.digitTwo}
					</div>
					<div className="col">
						{props.digitOne}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;