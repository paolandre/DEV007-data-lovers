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
- ¿Qué tanto sabes sobre Pokémon? (Para conocer a los usuarios que iban a responder la encuesta)
- De estas opciones señala la que más te llame la atención. (Esto para saber cuál sería nuestro filtro)
  - Region de cada pokémon, altura de cada pokémon, tipo de cada pokémon, etc. 
- De estas opciones señala lo que más te gustaría conocer. (Esta pregunta nos guiaría para saber qué parámetros ordenaríamos)
  - Pokémones de mayor a menor altura, pokémones de mayor a menor probabilidad de captura, etc. 
- ¿Qué te gustaría conocer? (Esta pregunta para saber qué calculo podríamos hacer)
  - El índice de masa corporal del pokémon, cuál es el promedio de estatura de los pokémones, etc. 

Aquí hay algunas capturas de pantalla de nuestra encuesta: 

![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/d6ea48f0-b0c2-48b3-a64c-b0b36a8bfc19)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/e21336a9-6d90-4068-a096-ccb328b1ce95)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/c6c068bb-34f5-420c-a28d-76c6f6845527)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/6a91e7c4-e03e-4c09-a65e-7441bebeb9bd)

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

![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/6524de7d-7e2a-4c57-aa30-2a3270921ab4)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/ce9cc10d-c111-41e7-ba05-c0fb19b39541)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/3db45489-7d8a-4b7e-9e04-45fa04c17d63)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/fc0a1345-0ee0-44e9-918b-1b547aa1f0fe)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/f7854474-7de6-4180-97fd-c2282704270c)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/be4febfb-2f1b-42b9-838a-5f6cd452514c)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/6a9d7135-0cf2-423e-8ead-20d788e852fc)

## 6. Prototipos de alta fidelidad
Creamos los prototipos de alta fidelidad usando Figma. 

Aquí está el link para acceder a la vista del prototipo en Figma: 
https://www.figma.com/file/U0KPK97klYB7pwpgWTGtoS/Prototipo-data-lovers?type=design&node-id=0%3A1&t=iIlefLPmZNn4a50R-1

Aquí están algunas capturas de pantalla: 

![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/a273937c-bdd5-451a-9ac6-1a12304d2b15)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/b92d8b1e-c144-4f48-93cf-a21e294211b6)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/17368b69-2574-4a3d-b864-a62d200eb1af)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/0237ba45-06e9-4d08-8a4a-9a7ef1fb72de)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/21f21ce6-43ea-4b79-9289-94ea1b88b795)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/79a204be-8350-4216-a573-bdac3fad8d09)
![image](https://github.com/carolinaposadl/DEV007-data-lovers/assets/129551206/899de3b4-b718-46fd-9bce-4f0eb7ae3d51)


## 7. Test de usabilidad

En la realización del proyecto hubo un cambio en el diseño inicial con relación al prototipo de alta fidelidad, porque cuando creamos la página nos dimos cuenta que para el usuario sería más sencillo y directo seleccionar el filtro y el ordenamiento en una lista desplegable en lugar de botones, lo cual le implicaría al usuario hacer más clicks. 
