const messages = [
    {
        author: "Pepe",
        text: "Hola que tal??!!",
        created_at: "20:21",
        id: 1
    },
    {
        author: "Juan",
        text: "Hola Pepe! Estoy bien, gracias. ¿Y tú?",
        created_at: "20:22",
        id: 2
    },
    {
        author: "Pepe",
        text: "Muy bien, gracias. Acabo de llegar del trabajo.",
        created_at: "20:23",
        id: 3
    },
    {
        author: "Luis",
        text: "Hola a todos! ¿Qué pasa?",
        created_at: "20:24",
        id: 4
    },
    {
        author: "Juan",
        text: "Nada en particular, Luis. Solo charlando.",
        created_at: "20:25",
        id: 5
    },
    {
        author: "Pepe",
        text: "Sí, nada especial. ¿Y tú, Luis? ¿Qué has hecho hoy?",
        created_at: "20:26",
        id: 6
    },
    {
        author: "Luis",
        text: "He estado trabajando en un proyecto. Nada emocionante.",
        created_at: "20:27",
        id: 7
    },
    {
        author: "Juan",
        text: "Bueno, algo es algo. ¿Cuándo lo terminarás?",
        created_at: "20:28",
        id: 8
    },
    {
        author: "Luis",
        text: "Espero terminarlo para fin de semana.",
        created_at: "20:29",
        id: 9
    },
    {
        author: "Pepe",
        text: "Genial! No puedo esperar para verlo.",
        created_at: "20:30",
        id: 10
    }
]


//Por cada mensaje en el HTML deberan mostrar:
/* 
    <div class='message-card'>
        <h3>${message.author}</h3>
        <p>${message.text}</p>
        <span>${message.created_at}</span>
    </div>
*/