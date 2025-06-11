## Todo projecto de node generalmente tiene dependencias

Las dependencias son los programas que debemos instalar para poder correr nuestro programa, las despendencias se pueden observar en el archivo package.json en la propiedad 'dependencies' y 'devDependencies'.

## Donde se guardan las dependencias?

Las dependencias se guardan en la carpeta node_modules del proyecto, suele ser una carpeta hija de la carpeta raiz.


## Como se instalan las dependencias?

Se instalan mediante npm (Node package manager) mediante el comando:

- npm install

Cuando este comando se ejecuta, automaticamente ira a leer el archivo package.json y instalara las dependencias y las sub-dependencias que falten.

## Scripts

En el package.json hay una propiedad llamada scripts, que suele guardar las acciones posibles en el programa / paquete. 

## Como ejecutar nuestra pagina web 

Para ejecutar nuestra aplicacion no podemos usar Live Server, necesitamos de un server que si funcione / este configurado para ejecutar React. Vite es ese server que podemos utilizar como reemplazo de live server
Para poder ejecutar vite debemos ejecutar el script "dev", para ejecutar el script "dev" tenemos el comando npm run dev

En conclusion, el nuevo go live o go to live server es npm run dev en la terminal.


## Nuestro proyecto es de tipo modular

Que sea de tipo modular significa que tenemos la posibilidad de separar nuestro proyecto en distintos archivos, estos archivos seran los modulos.

PD: Es de tipo modular porque en el package.json se definio que el "type" del proyecto es "module".

## Que ventaja traen los modulos?

- Dividimos las funcionalidades de la aplicacion
- Es mas facil organizarse
- Es mas facil debbugear
- Se puede reutilizar los modulos
