import React from 'react';
import ContactInfo from '../components/ContactInfo';

function Contact(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-2'></div>
                <ContactInfo></ContactInfo>
            </div>
        </div>
    )
}

export default Contact;