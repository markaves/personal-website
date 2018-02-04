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
    		timeLeft: null
    	};
	}
	
	componentDidMount() {
		this.fetchData()
		setInterval(() => this.convertTime(), 1000)
	}	 
	
	fetchData() {
	  fetch('https://api.spacexdata.com/v2/launches/upcoming')
      .then(response => response.json())
      .then(data => 
    		
    		this.setState({
      		spaceX: data[0].rocket.rocket_name + " launches in  ,
      		spacexTime: data[0].launch_date_unix
      		
      	}))
      	

      .catch(error => console.log('parsing failed', error))
	}
	
	convertTime() {
		var ts = Math.round(new Date().getTime()/1000);
		var rem = Number(this.state.spacexTime) - ts
		var date = new Date(rem*1000);
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();
		var timeLeft = hours + ' hours ' + minutes.substr(-2) + ' min ' + seconds.substr(-2) + " sec";
		if (this.state.spacexTime !== null) {
			this.setState({timeLeft})
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
							<h4>{this.state.spaceX}</h4>
							<h4>{this.state.timeLeft}</h4>
							
		
						
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;