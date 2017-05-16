import React from 'react';
import '../css/Style.css';
import photo from '../img/PersonalPicture.jpg'
import {Image} from 'react-bootstrap';


class Heading extends React.Component {
	render(){
		return (
			<div>
				<header className="header">
					<div className="text-vertical-center cover-photo">
							<h1>Mark Aves</h1>
							<h3>DevOps</h3>
						
							<Image src={photo} height="200" circle />
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;