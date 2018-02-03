import React from 'react';
import '../css/Style.css';
import photo from '../img/PersonalPicture.jpg'
import {Image} from 'react-bootstrap';


class Heading extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		unixTime: null,
    		rocketName: null
    	};
	}
	
	componentDidMount() {
		this.fetchData()
	}	 
	
	fetchData() {
	  fetch('https://api.spacexdata.com/v2/launches/upcoming')
      .then(response => response.json())
      .then(data => this.setState({
      		unixTime: data[0].launch_date_unix,
      		rocketName: data[0].rocket.rocket_name
      	}))
      .catch(error => console.log('parsing failed', error))
	}
	
	
	render(){
		
		
		
	
		
	
		return (
			<div>
				<header className="header">
					
					
					<div className="text-vertical-center cover-photo">
							<h1>Mark Aves</h1>
							<h3>DevOps</h3>
							<Image src={photo} height="200" circle />
							<h3>{this.state.unixTime}</h3>
							
						
					
							
								
								
							
							
							

							
						
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;