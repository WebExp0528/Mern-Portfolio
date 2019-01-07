import React from 'react';

import about from '../../public/images/about/creative.png';
import lfzLogo from '../../public/images/about/lfz-logo.png';
import calpolyLogo from '../../public/images/about/cp-logo.png';
import kingstonLogo from '../../public/images/about/kingston-logo.png';


export default props =>{

    return(
        <section id='about'>
        <div className="container">
            <h3 className='white-color'>Who Am I?</h3>
            <hr className='white-color'/>
            <p className='text-faded'>Hi! I'm Aaron Alfonso. I am a full stack Web developer currently living in Cumana, Venezuela.
            <br />
            I enjoy coding for both the front end and the back end. In particular, I enjoy the sense of pride and accomplishment when combining everything into a complete project.
            <br />
            I am excited to finally pursue my passion for computers, web-development, and coding.</p>
            <div className='row'>
            <img id="aboutImg" className='col s10 m6 l4 offset-s1 offset-m3 offset-l4 responsive-img' src={about} alt="About me"/>
            </div>
            <div className="text-faded center-align"><em>"Where there's a will, there's a way."</em></div>
            <p className='text-faded'>
            My principles of work:
            <br />
	        &emsp;&emsp;&emsp;&emsp;&emsp;- Professional approach to problem solving
            <br />
	        &emsp;&emsp;&emsp;&emsp;&emsp;- Analysis of modern technologies
            <br />
	        &emsp;&emsp;&emsp;&emsp;&emsp;- Use of the best practices in writing of clean and optimized code
            <br />
	        &emsp;&emsp;&emsp;&emsp;&emsp;- Learning and discussing the task before starting work
            <br />
	        &emsp;&emsp;&emsp;&emsp;&emsp;- Beautiful and elegant Design
            <br />
</p>
            
            <h4 className='white-color'>Background</h4>
            <hr className='white-color sub'/>
            <div className="row">
            <div className="col s12 m4">
                <img src={lfzLogo} alt="LearningFuze" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Completing LearningFuze's <em>Full Immersion Web Development Program </em>has laid the foundation for my <strong>software development</strong> career.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={kingstonLogo} alt="Kingston" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                5+ years experience as a <strong>Flash Design Engineer </strong>at <em>Kingston Technology</em> has molded me into an engineer that can take a concept and develop it into a high volume product.
            </div>
        </div>
        <div className="col s12 m4">
            <img src={calpolyLogo} alt="Cal Poly" className='bgImg responsive-img'/>
            <div className="background-text text-faded">
                Earning my bachelor's degree in <strong>Electrical Engineering</strong> while applying Cal Poly's <em>Learn by Doing</em> approach is how I acquired my logical and analytical skills.
            </div>
        </div>
            </div>
            
        </div>
        </section>
    );
}