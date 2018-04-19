import React from 'react';
import '../css/Style.css';
import '../bootstrap/css/bootstrap.css'
import '../bootstrap/css/bootstrap-theme.css'
import '../../node_modules/devicon/devicon.css'
import '../../node_modules/devicon/devicon-colors.css'




class Footer extends React.Component {
	render(){
	    return (
            <section id="about" className="about">
        		<div className="center">
        		    <div>
                	<a href="https://ph.linkedin.com/in/mark-aves-91b99033" target="_blank" rel="noopener noreferrer"><i className="devicon-linkedin-plain icon-size"></i></a>
                	<a href="https://github.com/markaves" target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain icon-size"></i></a>
            		</div>
            	<a href="mailto:markaves@gmail.com">markaves@gmail.com</a>
            	</div>
			</section>
		);
	}
}

export default Footer;



