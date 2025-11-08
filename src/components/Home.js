import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Simplify Your Life With Our Todo App</h1>
            <p>Stay organized and boost your productivity with our intuitive todo website.</p>
            <p>Experience a modern approach to task management that fits your lifestyle.</p>
            <div className='btn'>
                <button className='btn1'>Get Started</button>
                <button className='btn2'>Learn More</button>
            </div>
            <div className='header'>
                <div className='title'>
                    <div className='text'>
                        <h2 className='text1'>Organize.
                            Achieve.
                            Relax.</h2>
                        <p className='text2'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>
                    </div>
                    <div className='buttons'>
                        <button className='button1'>Get Started Today</button>
                        <button className='button2'>Discover Features</button>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='frame'>
                    <div className='frame1'>
<div className='logo'></div>
                    <div className='title'>
                        <h4 className='t1'>Freddie Halvorson</h4>
                        <h4 className='t2'>Chief Productivity Enthusiast</h4>
                    </div>
                    </div>
                    <div className='icon'>
                        <img src="../images/profile.png" alt="profile" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
