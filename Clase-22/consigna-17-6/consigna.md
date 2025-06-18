

const mensajes = [
    {
        emisor: 'YO'
        hora: '23:10'
        id: 1,
        texto: 'Hola que tal?',
        status: 'visto'
    },
    {
        emisor: 'USUARIO'
        hora: '23:11'
        id: 2,
        texto: 'Si, hoy aprendi estados',
        status: 'visto'
    },
    {
        emisor: 'YO'
        hora: '23:12'
        id: 3,
        texto: 'Eso que significa 🤓?',
        status: 'no-visto'
    },
    {
        emisor: 'YO'
        hora: '23:13'
        id: 4,
        texto: 'Estas ahi?',
        status: 'no-recibido'
    },
]

## Consigna:
En base a la lista de mansajes deberemos desarrollar un componente llamado <Chat /> que recibira por props una lista de mensajes y por cada mensaje se debera mostrar un dialogo de chat, en este caso el estilo es libre (Es decir podes permitirte NO tener fidelidad visual con la pagina de ejemplo de la consigna).

## ACLARACIONES:

- En vez de usar el icono de visto o no visto podes usar un circulo (12px . 12px) con azul para visto, gris/amarillo para no visto
- No es necesario que el dialogo del chat se vea EXACTAMENTE IGUAL
- Tratar de siempre mostrar el tiempo en el mensaje como en el mensaje de "Do you know what time is it?"