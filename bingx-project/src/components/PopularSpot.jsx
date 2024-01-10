import React from "react";
import useAxios from "../hooks";

function PopularSpot() {
	const {response} = useAxios(
		"coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false&locale=en"
    );
    
    console.log(response);
	return <div>BitcoinWidget</div>;
}

export default PopularSpot;
