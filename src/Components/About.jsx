import React from 'react';
import aboutimage from '../images/image10.jpg'


const About = () => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='' />
            </div>
            <div className='about-text'>
                <h1>Why Us ?</h1>
                <p>
                    At Fitness Revolution we offer great value fitness options. We believe that you
                    should get to choose the membership that works best for your needs. &nbsp;&nbsp;
                    Here are some reasons why Fitness Revolution is that little bit different.

                <p>
                    We offer modern facilities with a wide range of workout options
                    to suit your personality and lifestyle.
                    Our highly skilled team of Personal Trainers are here to help you
                    achieve all your health and fitness goals.</p>

                    Whether you’re a newbie or a gym junkie, a lifter or a walker; turn up, do it.
                    Your time, your pace. Your workout, your way.
                    We have a great range of pricing options to ensure everyone can
                    incorporate fitness and health into their lifestyle.
                </p>
            </div>

            
        </div>
    )
}

export default About
