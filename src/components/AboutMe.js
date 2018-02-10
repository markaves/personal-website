import React from 'react';
import '../css/Style.css';
import { Grid, Row, Col} from 'react-bootstrap'
import '../bootstrap/css/bootstrap.css'
import '../bootstrap/css/bootstrap-theme.css'




class AboutMe extends React.Component {
	render(){
	    return (
            <section id="about" className="about">
				<Grid>
                    <Row>
					    <Col lg={12} className="text-center">
                        <p>I am an <font color='#ff8f00'>Electronics Engineering</font> graduate</p>
                        <p>I was <font color='#ff8f00'>Test Engineer</font> at <font color='#ff8f00'>Analog devices</font></p>
                        <p>I changed my career for the love of IT</p>
                        <p>I got a job as a Software Engineer at <font color='#ff8f00'>Accenture</font></p>
                        <p>I handled Automation Scripting and Middleware</p>
                        <p>It opened my eyes on the possibilities of the Web</p>
                        <p>I became a Web Engineer at <font color='#ff8f00'>Hewlett Packard</font></p>
                        <p>I wanted more challenges so I learned Java</p>
                        <p>Now I am a practicing<font color='#ff8f00'> DevOps</font> at <font color='#ff8f00'>Macquarie</font></p>
            			</Col>
					</Row>
		        </Grid>
			</section>
		);
	}
}

export default AboutMe;