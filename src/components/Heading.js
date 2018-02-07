import React from 'react';
import '../css/Style.css';
import photo from '../img/PersonalPicture.jpg'
import {Image} from 'react-bootstrap';


class Heading extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		spaceX: null,
    		spacexTime: null,
    		payloadId: null,
    		timeLeft: null,
    		timeNow: null,
    		lineOne: null
    	};
	}
	
	componentDidMount() {
		this.fetchData()
		setInterval(() => {
			var timeNow = Math.round(new Date().getTime()/1000);
			this.setState({timeNow})
		}, 1000)
	}	 
	
	fetchData() {
	  fetch('https://api.spacexdata.com/v2/launches/upcoming')
      .then(response => response.json())
      .then(data => 
    		
    		this.setState({
      		spaceX: data[0].rocket.rocket_name,
      		spacexTime: data[0].launch_date_unix,

      	}))
      	

      .catch(error => console.log('parsing failed', error))
	}
	
	convertTime(timeNow) {
		var diff = Number(this.state.spacexTime) - timeNow
		
        
		var d, h, hh, m, mm, s;
		var timeLeft = null
		
		if (diff > 0){
			
		if (this.state.spaceX != null){
		this.setState({lineOne: 'SpaceX ' + this.state.spaceX + ' launches in'})
		}

	 	m = Math.floor(diff / 60);
	    s = diff % 60;
        h = Math.floor(m / 60);
        mm = m % 60;
        d = Math.floor(h / 24);
		hh = h % 24;

		if (d > 0) {
			if (hh > 1)
				timeLeft =d + " days " + hh + ' hours ' + mm + ' min ' + s + " sec";
			else
				timeLeft =d + " days " + hh + ' hour ' + mm + ' min ' + s + " sec";
		}else {
			if (hh > 1)
				timeLeft = hh + ' hours ' + mm + ' min ' + s + " sec";
			else
				timeLeft = hh + ' hour ' + mm + ' min ' + s + " sec";
		} 
        }else{
        	if (this.state.spaceX != null){
        	this.setState({lineOne: this.state.spaceX +' has been '})
        	timeLeft='LAUNCHED'
        	}
        }
	
				
		if (this.state.spacexTime !== null) {
			return timeLeft
		}
		}
	
	render(){
		
		this.convertTime()
		return (
			<div>
				<header className="header">
					
					
					<div className="text-vertical-center cover-photo">
							<h1>Mark Aves</h1>
							<h3>DevOps</h3>
							<Image src={photo} height="200" circle />
							<h4>{this.state.lineOne}</h4>
							<h4>{this.convertTime(this.state.timeNow)}</h4>
						
							
		
						
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;