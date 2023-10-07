import React from 'react';
import './Popuptext.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import raw from '../advisory.txt';

var insidetext = ''
export default function Popuptext(){

	fetch(raw)
	  .then(r => r.text())
	  .then(text => {
			// alert(text);
			// document.querySelector(".advisory-text").textContent = text;
			insidetext = text;
			// alert("Inside text is " + insidetext)
	});

	return(
		<div class="container popuptext">
			<Popup trigger={<button className='bttn'> + </button>} position="right center">
				<div className="advisory-text">bay of bengal: yesterday’s well marked low pressure area over southwest rajasthan & neighbourhood lay over southeast pakistan & adjoining southwest rajasthan at 0300 utc of today, the 25th august, 2022.
				scattered low and medium clouds with embedded moderate to intense convection over westcentral bay of bengal off south andhra pradesh coast, andaman sea and tenasserim coast.
				scattered low and medium clouds with embedded isolated weak to moderate convection over rest areas of bay of bengal.
				probability of cyclogenesis (formation of depression) during next 120 hrs: 24 hours 24-48 hours | 48-72 hours | 72-96 hours 96-120 hours nil nil nil nil nil arabian sea: scattered to broken low and medium clouds with embedded intense to very intense convection over southeast arabian sea.
				scattered low and medium clouds with embedded weak to moderate convection over rest areas of north arabian sea and southwest arabian sea.
				</div>
			</Popup>
		</div>
	);
}
