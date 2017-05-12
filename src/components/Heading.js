import React from 'react';
import '../css/Style.css';
import photo from '../img/PersonalPicture.jpg'
import Avatar from 'react-avatar';



class Heading extends React.Component {
	render(){
		return (
			<div>
				<header className="header">
					<div className="text-vertical-center cover-photo">
							<h1>Mark Aves</h1>
							<h3>DevOps</h3>
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;