const messages = [
    {
        id: 1,
        author: 'jose',
        text: 'hola',
        date: '2021-10-10 12:00:00'
    },
    {
        id: 2,
        author: 'pedro',
        text: 'Que tal?',
        date: '2021-10-10 12:00:00'
    },
    {
        id: 3,
        author: 'jose',
        text: 'bien',
        date: '2021-10-10 12:00:00'
    }
]

const ID_MESSAGES_VALUES = {
    MESSAGES_CONTAINER: 'messages-container',
    MESSAGE_FORM: 'message-form'
}

const messages_container_HTML = document.getElementById(ID_MESSAGES_VALUES.MESSAGES_CONTAINER)
const message_form_HTML = document.getElementById(ID_MESSAGES_VALUES.MESSAGE_FORM)

function renderMessages () {
    //Logica para renderizar la lista de mensajes
    let messages_html_string = ''
    for(const message of messages){
        messages_html_string = messages_html_string + `
            <div>
                <h3>${message.author}</h3>
                <p>${message.text}</p>
                <span>Fecha: ${message.date}</span>
                <hr/>
            </div>
        ` 
    }
    messages_container_HTML.innerHTML = messages_html_string
}

function addNewMessage (new_message){
    messages.push(new_message)
    renderMessages()
}

//El primer parametro asociado a un evento recibira por parametro un objeto llamado event
//Ese parametro event lo genera el navegador
function handleSubmitMessageForm (event){
    //Esto previene el comportamiento por defecto del evento submit
    event.preventDefault()

    //Quiero capturar el mensaje de mi input dentro del formulario
    let message_text = message_form_HTML.message.value
    const new_message = {
        author: 'jose',
        text: message_text,
        date: '2021-10-10 12:00:00'
    }
    addNewMessage(new_message)

    //Reseteamos el input a vacio nuevamente
    message_form_HTML.message.value = ''
} 

//Evento para manejar el envio del formulario
//El evento submit por defecto recarga la pagina
message_form_HTML.addEventListener('submit', handleSubmitMessageForm)

//Quiero que la primera vez que se ejecute el codigo se vea la lista de mensajes
renderMessages()
