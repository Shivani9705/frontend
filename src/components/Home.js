import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
    return (
        <div className='home'>
            <h1>Simplify Your Life With Our <br /> Todo App</h1>
            <div className='para'>
                <p>Stay organized and boost your productivity with our intuitive todo website.</p>
                <p>Experience a modern approach to task management that fits your lifestyle.</p>
                <div className='btn'>
                    <button className='btn1 btn btn-danger'>Get Started</button>
                    <button className='btn2 btn btn-outline-danger'>Learn More</button>
                </div>
            </div>

            <div className='container row justify-content-space-between'>
                <div className='header col-12 col-md-8 me-1'>
                    <div className='title'>
                        <div className='text'>
                            <h2 className='text1'>Organize.<br />
                                Achieve.<br />
                                Relax.</h2>
                            <p className='text2'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
                        </div>
                        <div className='buttons d-md-block '>
                            <button className='button1 '>Get Started Today</button>
                            <button className='button2'>Discover Features</button>
                        </div>
                    </div>
                </div>
                <div className='card col-12 col-md-3'>
                    <img src="../images/home_image.png" alt="profile" />
                    <div className='title'>
                        <h2>Your Tasks.<br />
                            Our Tools.</h2>
                    </div>
                    <div className='pagination'>

                    </div>
                    <div className='frame'>
                        <div className='frame1'>
                            <h4>Freddie Halvorson</h4>
                            <p>Chief Productivity Enthusiast</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='logo_strip'>
                <img src="/images/google.svg" alt="Google" />
                <img src="/images/facebook.svg" alt="Facebook" />
                <img src="/images/slack.svg" alt="Youtube" />
                <img src="/images/notion.svg" alt="Pinterest" />
                <img src="/images/notion.svg" alt="Twitch" />
            </div>

        </div>
    )
}

export default Home
