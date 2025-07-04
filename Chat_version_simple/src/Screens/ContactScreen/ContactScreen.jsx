import React from 'react'
import contacts from '../../data/contacts'
import { Link } from 'react-router'

const ContactScreen = () => {
  return (
    <div>
        <h1>Lista de contactos:</h1>
        <div className='contact-container'>
            {
                contacts.map(contact => {
                    return (
                        <Link to={`/contact/${contact.id}`} className='contact' key={contact.id}>
                            <img src={contact.img} alt={contact.name} />
                            <div className='contact-info'>
                                <h2>{contact.name}</h2>
                                <p>{contact.last_time_connected}</p>
                            </div>
                            <hr />
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ContactScreen