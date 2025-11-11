import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './About.css';
const About = () => {
    return (
        <div className='about'>
            <div className='header'>
                Transform Your Productivity with Our <br /> Innovative To-Do List Features
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='card'>
                            <h1>01</h1>
                            <div className='icon'>
                                < FontAwesomeIcon icon={faDumbbell} />
                            </div>

                            <h5>User-Friendly Interface</h5>
                            <div className='line'></div>
                            <p>Our platform offers seamless task management to boost your efficiency.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='card'>
                            <h1>02</h1>
                            <div className='icon'>
                                < FontAwesomeIcon icon={faDumbbell} />
                            </div>

                            <h5>Collaborate & Share Effortlessly</h5>
                            <div className='line'></div>
                            <p>Invite team members to work together and achieve your goals faster.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='card'>
                            <h1>03</h1>
                            <div className='icon'>
                                < FontAwesomeIcon icon={faDumbbell} />
                            </div>

                            <h5>Effortless Collaboration</h5>
                            <div className='line'></div>
                            <p>Invite team members to work together and achieve your goals faster.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className='card'>
                            <h1>04</h1>
                            <div className='icon'>
                                < FontAwesomeIcon icon={faDumbbell} />
                            </div>

                            <h5> Seamless Access</h5>
                            <div className='line'></div>
                            <p>Stay connected and manage your tasks on the go with ease.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
