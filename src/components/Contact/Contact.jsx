import React from 'react';
import "./Contact.css";

// Icons
import {ReactComponent as ContactIcon} from "../../assets/svg/contact.svg";
import {ReactComponent as PhoneIcon} from "../../assets/svg/phone.svg";
import {ReactComponent as WhatsappIcon} from "../../assets/svg/whatsapp.svg";

const Contact = () => {
    return (
        <div className='Contact'>
            <div className='Contact-title'>
                <ContactIcon />
                <span>Entre em contato</span>
            </div>

            <div className='Contact-itens'>
                <div className='Contact-whatsapp'>
                    <WhatsappIcon />
                    <span>(99) 99999-9999</span>
                </div>

                <div className='Contact-phone'>
                    <PhoneIcon />
                    <span>(99) 99999-9999</span>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;