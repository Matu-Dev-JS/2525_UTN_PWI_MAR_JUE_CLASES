import { createContext, useState } from "react";



export const ContactContext = createContext({
    contacts: []
})

const ContactContextProvider = ({children}) => {
    const [contacts, setContacts] = useState(
        [
            {
                id: 1,
                name: 'Pepe',
                last_time_connected: '14:19',
                img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
                last_message: {
                    id: 1,
                    text: 'Que tal, tanto tiempo!'
                },
                unread_messages: 1
            },
            {
                id: 2,
                name: 'Lucia',
                last_time_connected: '15:19',
                img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
                last_message: {
                    id: 1,
                    text: 'Que tal, tanto tiempo!'
                },
                unread_messages: 0
            },
            {
                id: 3,
                name: 'Carlos',
                last_time_connected: '17:19',
                img: "https://resizing.flixster.com/HyNT-XNfqIkd0KbeP0zrKyDQQro=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p90510_p_v10_aa.jpg",
                last_message: {
                    id: 1,
                    text: 'Que tal, tanto tiempo!'
                },
                unread_messages: 20
            }
        ]
    )


    return (
        <ContactContext.Provider
            value={
                {
                    contacts: contacts
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider