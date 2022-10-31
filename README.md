# My Freaky Shop

<img src="https://res.cloudinary.com/georgevalle/image/upload/v1657077569/freaky-shop/mini_gif_final_myfreakyshop_fuli5u.gif" align="left"/>


## `Introducción`

El sitio se llama My Freaky Shop y es un Ecommerce orientado a la venta de artículos denominados "Frikis" conteniendo las siguientes categorías:

### `Helmets`

Aquí aparecen los cascos de personajes famosos, por ejemplo los del mundo de Star Wars.

### `Figuras`

Aquí se destacan los muñecos de personajes de series o peliculas

### `Funko-Pops`

Se venden los muñecos de la marca más famosa de figuras coleccionables.

**Nota: ¡Este tipo de muñeco cabezón difiere de los muñecos tradicionales y los hace  `Muy populares`, !**

### `Comics`

En este apartado se destacan las revistas de historietas de distintas editoriales como por ejemplo: DC, Marvel, Etc. 

### Idea del proyecto 💡​
Me decidí por elegir esta tématica para el Ecommerce, porque es un tema muy común entre los trabajadores IT. La aficción por los productos de series, peliculas, libros, revistas, etc. Que hace mover fanaticos por todo el mundo. Este fanatismo encuentra en este sitio, un alisiente a consumir aquellos productos que les trae felicidad.

### Algunas decisiones puntuales 
- Se eligió la utilización del fondo de color oscuro y la fuente blanca. Para la creación de las cards del componente Item, Se implementó una imagen de 400px que puede exapndirse en zoom en la vista detalles, la cual, se accede a través del botón nombrado "Ver Detalles".

- El componente ItemCount se utilizó iconos de + -, el badge con la cantidad total de stock, con la caracteristica que evita que pueda agregar al carrito más cantidad de prodicto del total de stock, ní tampoco descontar más allá del cero. Está caracteritica es señalada cuando el botón azul se tiñe de gris.

- Se colocó un loader con unn gif de un portal, para ocupar el lugar de la frase "Cargando..." configurado para que un hook de estado marque el momento en el cual aparece y desaparece.

- El componente CartWidget del Navbar, está creado dentro de un botón el cual será routeado a la zona del carrito de compras.

- Se utilizó como backend la base de datos provista por Firebase que permite crear las distintas colecciones tanto de productos como historial de compras.

- El randerizado de los productos del Carrito, se realizó a traves de una función exportada desde el contexto CartContext debido a ciertos errores que aparecian al ejecutar.

- La muestra de los totales en la vista Cart, fue hecha desde un componente aparte para crear un poco mejor de limpieza en el código.

- Se decidió usar como una exportación el componente NavBar debido a un conflicto de nombres.

- Se crearon dos gif con la grabacion del sitio, uno intermedio y otro final, donde se muestra el funcionamiento de la app, se encuentran en la raiz del proyecto.

- Se agregó ingreso y registro de los usuarios. estos se guardan en la base de datos de firestore.

- El despliegue está hecho en Vercell por una cuestion de rapida actualizacion de cambios a través del repositorio.

## Comenzando 🚀




_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo._

Mira **Despliegue** para conocer como desplegar el proyecto.



### Pre-requisitos 📋

_Se necesita:_

```
- Una versión de GIT para clonar el repositorio en tu PC Local.
- tener instalada una versión de Visual Code Studio.
- Tener instalada una versión de NPM o Yarn para la instalación de paquetes.
```

### Instalación 🔧

_Se necesita instalar a través de NPM o YARN la siguiente lista de librerias y dependencias para ejecutar el proyecto_


### Librerias y dependencias necesarias

```

bootstrap: "^5.1.3",
Para el CSS.

react: "^18.1.0",
react-dom: "^18.1.0",
react-icons: "^4.3.1",
Una libreria que tiene linkeados varias colecciones de iconos gratis.

react-router-dom: "^6.3.0",
Para poder crear las rutas.

react-scripts: "5.0.1",
reactstrap: "^9.0.2",
Una libreria de estilos y formatos adaptada a los componentes de React.
```
Para visualizarlo en su Computador.

```
En el directorio del proyecto, puedes ejecutarlo:
`npm start`

Corre la App en modo desarrollador.\
abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.

La pagina se recargará cuando haga cambios.\
Tambien puede ver cualquier linea de error en la consola.

```

## Despliegue 📦


```
`npm run build`
Para crear la producción en la carpeta `build` .\ 
esta obtendrá el código minificado para tener una mejor performance y poder cargarlo en un servidor.
```

- Para visualizar el resultado final puedes entrar al siguiente link:_

https://vercel.com/georgevalle/my-freaky-shop/D4TG5qymGqrnbJwKdyzQ382DHvUt


## Construido con 🛠️


* [Visual Studio Code] (https://code.visualstudio.com/) - El ID utilizado
* [Reactstrap] (https://reactstrap.github.io/?path=/story/home-installation--page) - El framework visual utilizado
* [Reac Router] (https://reactrouter.com/) - El enrutador utilizado
* [React] (https://reactjs.org/) - El framework web usado
* [NPM] (https://www.npmjs.com) - Manejador de paquetes
* [Firebase] (https://firebase.google.com/) - Gestor de Backend
* [Cloudinary] (https://cloudinary.com/) - Plataforma de almacenamiento de imagenes
* [Vercel] (https://vercel.com/) - para el despliegue web de la app



## Autores ✒️

* **Jorge Valle** - *Trabajo Completo* - [Valle Jorge](https://github.com/GeorgeValle)

## Staff de Apoyo 👨‍🏫​👩‍🏫​
* **Alex Marín Mendez** - *Docente* 
* **José Aramando Perez Pérez** - *Tutor*
* **Laura Therisod** - *Tutora*
* **Anyel Lopez** - *Tutora* 



## Expresiones de Gratitud 🎁

* Les dejó un cordial saludo, agradeciendo su gentileza al observar este Proyecto 📢
* Agradecimiento al staff de apoyo que dió su punto de vista a mis inquitudes. 
* Gracias a los compañeros de cursado de React en CoderHouse por su buena onda.
* Podés donar con bitcoins para afrontar gastos en mi preparación a esta dirección de Legacy: `3BbvTywK4XPzrsatbRni2GNf7EPsYgn5wj`
* Bendiciones para todos.



---
⌨️ con ❤️ por [George Valle](https://github.com/GeorgeValle) 😊