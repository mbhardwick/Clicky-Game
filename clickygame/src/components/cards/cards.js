import React from "react";
import "./Cards.css";

const Cards = props => (

	<div onClick={()=> props.setClicked(props.id)} className="card col-sm-3" id="img-card">
		<div className="img-container">
			<img alt={props.name} src={props.image} />
		</div>
	</div>
);

export default Cards;