import React from 'react';
import '../css/Style.css';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import '../bootstrap/css/bootstrap.css'
import '../bootstrap/css/bootstrap-theme.css'
import aws from '../img/aws.jpg'
import bamboo from '../img/bamboo.jpg'
import spring from '../img/spring.png'
import java from '../img/java.png'
import react from '../img/react.jpg'
import udeploy from '../img/udeploy.jpg'


class Skills extends React.Component {
	render(){
	    return (
		    <section className="skills">
                <Grid>
                    <Row className="text-center">
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={aws} height="60" />
                        </Col>
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={java} height="70" />
                        </Col>
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={spring} height="40" />
                        </Col>
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={bamboo} height="60" />
                        </Col>
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={react} height="60" />
                        </Col>
                        <Col xs={6} sm={4} md={2} className="icon-div">
                            <Image src={udeploy} height="60" />
                        </Col>

 
                                                                                                
                    </Row>

    
  </Grid>
  </section>
  
		);
	}
}

export default Skills;