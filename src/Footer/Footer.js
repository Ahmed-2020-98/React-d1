import React from 'react';
import './Footer.css'

class Footer extends React.Component {
    state = {  }
    render() {
        return (
            <>
            <div className='bg-secondary'>
                <div className='container'>
                    <div className='contentFooter '>
                        <div>
                            <h3>GET IN Touch</h3>
                            <h5>a@gmail.com</h5>
                            <h5>105645155848</h5>
                        </div>
                        <div>
                            <button className='btn btn-dark'> Contact Us</button>
                        </div>
                        <div>
                            Copyright &copy; 2022
                        </div>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
}

export default Footer;