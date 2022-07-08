import React from 'react';
import './Portfolio.css'
class Portfolio extends React.Component {
    state = {  }
    render() {
        return (
            <>
            <div className='bg-light'>
            <div className='container py-5 portfolio'>
                <h1>Portfolio</h1>
                <div className='cards '>
                    <div className='cardd'>Web Design</div>
                    <div className='cardd ftra'>Web Design</div>
                    <div className='cardd'>Web Design</div>
                    <div className='cardd ftra'>Web Design</div>
                    <div className='cardd'>Web Design</div>
                    <div className='cardd ftra'>Web Design</div>
                </div>
            </div>
            </div>
            
            </>
        );
    }
}

export default Portfolio;