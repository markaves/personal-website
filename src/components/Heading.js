import React from 'react';
import '../css/Style.css';
import photo from '../img/MarkAves.jpg'
import {
    Image
} from 'react-bootstrap';

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spaceX: null,
            spacexTime: null,
            payloadId: null,
            timeLeft: null,
            timeNow: null,
            lineOne: null,
            lineTwo: null
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        fetch('https://api.spacexdata.com/v2/launches/upcoming')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    spaceX: data[0].rocket.rocket_name,
                    spacexTime: data[0].launch_date_unix,
                }))
            .catch(error => console.log('parsing failed', error))
    }
    
    tick() {
        var timeNow = Math.round(new Date().getTime() / 1000);
        var diff = Number(this.state.spacexTime) - timeNow;
        var d, h, hh, m, mm, s;
        var lineOne = null
        var lineTwo = null

        if (diff > 0) {
            m = Math.floor(diff / 60);
            s = diff % 60;
            h = Math.floor(m / 60);
            mm = m % 60;
            d = Math.floor(h / 24);
            hh = h % 24;
            lineOne = 'SpaceX ' + this.state.spaceX + ' launches in'
            if (d > 0) {
                if (hh > 1)
                    lineTwo = d + " days " + hh + ' hours ' + mm + ' min ' + s + " sec";
                else
                    lineTwo = d + " days " + hh + ' hour ' + mm + ' min ' + s + " sec";
            } else {
                if (hh > 1)
                    lineTwo = hh + ' hours ' + mm + ' min ' + s + " sec";
                else
                    lineTwo = hh + ' hour ' + mm + ' min ' + s + " sec";
            }
        } else {
            if (this.state.spaceX != null) {
                lineOne = this.state.spaceX + ' just has been launched'
                lineTwo = null
            }
        }
        this.setState({
            lineOne,
            lineTwo
        })
    }
    
	render(){
		return (
			<div>
				<header className="header">
					<div className="text-vertical-center cover-photo">
							<h1>Mark Aves</h1>
							<h3>Developer/DevOps</h3>
							<Image src={photo} height="200" circle />
							<h4>{this.state.lineOne}</h4>
							<h4>{this.state.lineTwo}</h4>
					</div>
				</header>
			</div>
		)
	}
}

export default Heading;
