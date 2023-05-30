# Data Lovers

## Índice

* [1. Descripción](#1-descripción)
* [2. Implementación del proyecto](#2-implementación-del-proyecto)
* [3. Encuestas](#3-encuestas)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Prototipos de baja fidelidad](#5-prototipos-de-baja-fidelidad)
* [6. Prototipos de alta fidelidad](#6-prototipos-de-alta-fidelidad)
* [7. Test de usabilidad](#7-test-de-usabilidad)

***
## 1. Descripción

Se trata de una interfaz que permite visualizar una lista de 251 pokémones de la región Kanto y Johto, filtrar por su tipo de poder y ordenar de menor a mayor probabilidad de captura (y viceversa), además incluye una imagen de cada pokémon y la altura y peso de cada uno.

El objetivo de la plataforma es ayudar tanto a los usuarios jugadores de Pokemon GO, como quienes quieren conocer un poco del mundo Pokémon a conocer la data más relevante que se necesita conocer sobre cada pokémon.

## 2. Implementación del proyecto

Este proyecto utiliza los métodos .filter para filtrar los pokémones y .sort para ordenarlos. 

Inicialmente el usuario puede visualizar la lista de pokémones, luego tiene la posibilidad de seleccionar el botón para filtrar, desde el cual se despliega una lista con cada tipo de poder. El segundo botón permite ordenar, el usuario puede escoger entre dos opciones. 

Se ha realizado una investigación de usuario a través de una encuesta para conocer sus preferencias y necesidades. A partir de allí se construyeron las historias de usuario.

## 3. Encuestas

Para el desarrollo del proyecto, creamos cuatro historias de usuario que implementamos teniendo en cuenta una encuesta que realizamos utilizando la herramienta de Google para crear formularios. 

Las preguntas que les hicimos a los usuarios fueron: 
- ¿Qué tanto sabes sobre Pokémon?** (Para conocer a los usuarios que iban a responder la encuesta)
- De estas opciones señala la que más te llame la atención.** (Esto para saber cuál sería nuestro filtro)
 - Region de cada pokémon, altura de cada pokémon, tipo de cada pokémon, etc. 
- De estas opciones señala lo que más te gustaría conocer.**
 - Pokémones de mayor a menor altura, pokémones de mayor a menor probabilidad de captura, etc. 
- ¿Qué te gustaría conocer? (Esta pregunta para saber qué calculo podríamos hacer)
  - El índice de masa corporal del pokémon, cuál es el promedio de estatura de los pokémones.

Aquí hay algunas capturas de pantalla de nuestra encuesta: 

## 4. Historias de usuario

Los resultados de la encuesta nos dieron como resultado estas cuatro historias de usuario: 

**Primera historia - Yo, como alguien que sabe un poco de la historia del mundo Pokemon, quiero poder ver una lista de los pokemon, para conocer algunos datos básicos.**

Criterios de aceptación 
[ ] Quiero que la lista de pokemones se vea en la página principal en forma de ficha donde aparezca con su respectiva imagen, nombre, tipo de poder, probabilidad de captura y estatura (en inglés)
[ ] Quiero que sea responsive, para telefono y pc
[ ] Quiero que sea una interfaz sencilla de usar para el usuario
[ ] No hay ningún tipo de interacción

Definición de terminado 

[ ] Todo el código está subido a la rama principal de repositorio.
[ ] Hemos hecho prueba de usabilidad con al menos 2 usuarios.
[ ] Hemos publicado la historia a una página de GitHub pages.

**Segunda historia - Yo, como alguien que sabe un poco de la historia del mundo Pokemon, quiero poder ver una lista de los pokemon, para filtrarlos según su tipo de poder.**

Criterios de aceptación 

[ ] Quiero que sea responsive, para telefono y pc
[ ] Quiero que sea una interfaz sencilla de usar para el usuario
[ ] Quiero filtrar los pokemones por tipos de poder (en inglés)

Definición de terminado 

[ ] Todo el código está subido a la rama principal de repositorio.
[ ] Hemos hecho prueba de usabilidad con al menos 2 usuarios.
[ ] Hemos publicado la historia a una página de GitHub pages.

**Tercera historia - Yo, como alguien que sabe un poco de la historia del mundo Pokemon, quiero poder ver una lista de los pokemon, para ordenar los pokemones de mayor a menor probabilidad de captura.**

Criterios de aceptación

[ ] Quiero que sea responsive, para telefono y pc
[ ] Quiero que sea una interfaz sencilla de usar para el usuario
[ ] Quiero ordenar la lista de pokemones de mayor a menor probabilidad de captura (en inglés)

Definición de terminado 

[ ] Hemos hecho prueba de usabilidad con al menos 2 usuarios.
[ ] Todo el código está subido a la rama principal de repositorio.
[ ] Hemos publicado la historia a una página de GitHub pages.

**Cuarta historia - Yo, como alguien que sabe un poco de la historia del mundo Pokemon, quiero poder ver una lista de los pokemon, para calcular el promedio de estatura de los pokemones.**

Criterios de aceptación 

[ ] Quiero que sea responsive, para telefono y pc
[ ] Quiero que sea una interfaz sencilla de usar para el usuario
[ ] Quiero calcular el promedio de estatura de los pokemones.

Definición de terminado 

[ ] Hemos hecho prueba de usabilidad con al menos 2 usuarios.
[ ] Todo el código está subido a la rama principal de repositorio.
[ ] Hemos publicado la historia a una página de GitHub pages.

## 5. Prototipos de baja fidelidad

Creamos los prototipos de baja fidelidad usando lápiz y papel. Aquí están las fotos: 


## 6. Prototipos de alta fidelidad
Creamos los prototipos de alta fidelidad usando Figma. 

Aquí está el link para acceder a la vista del prototipo en Figma: 
https://www.figma.com/file/U0KPK97klYB7pwpgWTGtoS/Prototipo-data-lovers?type=design&node-id=0%3A1&t=iIlefLPmZNn4a50R-1

Aquí están algunas capturas de pantalla: 

## 7. Test de usabilidad

En la realización del proyecto hubo un cambio en el diseño inicial con relación al prototipo de alta fidelidad, porque cuando creamos la página nos dimos cuenta que para el usuario sería más sencillo y directo seleccionar el filtro y el ordenamiento en una lista desplegable en lugar de botones, lo cual implicaría dar más clicks. 