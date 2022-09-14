# Admin Client

App para administracion de clientes desarrollada utilizando React, Vite y Tailwind.

En esta app podran crear clientes y almacenar su nombre datos de contacto y la hroa y fecha en la que tengan una reunion con ese cliente, ademas podran agregar una descripcion sobre ese cliente para anotar datos que le parezcan relevantes sobre este cliente. Podran editar y eliminar los clientes.

El sitio se encuentra activo en Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/0e99059b-79cf-47ff-87c1-7067f6339f0e/deploy-status)](https://app.netlify.com/sites/clientsadmin/deploys)

## Documentacion de lo aprendido

La gran parte de esta documentacion es un paso a paso de lo aprendido en el proyecto con el fin de tener un seguimiento y afianzar mis conocimientos con cada proyecto.

## Iniciando proyecto de React con vite

1- Lo primero que debemos hacer es iniciar vite con el comando npm init vite@latest para descargar la ultima version.
2- Luego le damos enter para instalar las dependencias, elegimos la tecnologia a utilizar y luego si usamos JSX o TypeScript.
3- Corremos el comando npm install.
4- npm run dev para levantar el servidor.

## Instalacion de eslint

Instalar eslint como dependencia de desarrollo con npm install eslint -D.
Iniciar eslint con npx eslint --init y completar el cuestionario segun los gustos.
Ademas para evitar problemas con eslint tuve que agregar algunas reglas en su eslintrc que son las siguientes.

- 'react/react-in-jsx-scope': 'off' esta para evitar tener que ser implicito en las importaciones de state o hooks de react.
- 'linebreak-style': 0 para evitar tener saltos de linea porque trabajo en windows.
- 'react/prop-types': 0 para evitar el error de proptypes porque no lo estamos utilizando.

## Añadiendo tailwind css

npm i -D tailwindcss postcss autoprefixer para instalar las dependencias.
npx tailwindcss init -p para iniciar la configuracion.

en index.css debemos importar los archivos/paquetes de tailwind.

@tailwind base;
@tailwind components;
@tailwind utilities;

en el archivo de configuracion de tailwind debemos indicar donde vamos a utilizar este framework.

"./index.html", "./src/**/*.jsx"

es recomendable reinicar el servidor para que lea los archivos nuevos.

## Comenzando el proyecto

Este proyecto es un administrador de clientes, que permite almacenar cñientes para llevar un seguimiento
El proyecto utiliza React, Vite y Talwind.

## Hooks

En este proyecto aprendi y aplique el uso de los hooks mas utilizados en React que son useState y useEffect.

### useState

Sintaxis de useState

``` javascript
const [state, setState] = useState("")
```

Dentro del state podemos almacenar cualquier tipo de dato.
El useState sirve para manejar el estado de un componenes, como vemos en la declaracion el useState es una funcion que retorna un array de 2 valores, su primer valor el state es quien contiene el valor del estado , el segundo valor setState es quien puede actualizar este valor veamoslo con un ejemplo.

En el caso anterior tenemos un state y un setState podemos nombrar estas variables como deseemos por ejemplo:

``` javascript
const [username, setUsername] = useState("")
```

De esta manera username seria un estado que contiene el valor de un string vacio, a traves de setUsername podemos actualizar el valor del estado por ejemplo:

``` javascript
setUsername("Juan")
```

De esta manera el nuevo valor de username sera "Juan".

Un componenete puede tener mas de un estado, algo importante es que react reacciona a los cambios de estado, cada vez que un estado cambia su valor o se actualiza el componenete en el cual esta declarado ese estado se vuelve a renderizar para reflejar los cambios en el componente.

### useEffect

Sintaxis de useEffect

``` javascript
useEffect(() => {
  
},[])
```

El useEffect es un hook que se ejecuta una vez que termina de montarse el componenete en el que fue invocado el efecto, es perfecto para hacer consultas con fetch o al localstorage.

Como vemos el useEffect recibe un array como dependencia, de esta depende cuando va a ejecutarse el efecto. Por defecto si lo dejamos vacio el efecto se ejecutara una sola vez, en cambio es usual que el deseemos que el efecto vuelva a ejecutarse para traer otros datos o hacer otras consultas, veamoslo con un ejemplo:

Para el ejemplo hare uso del useState junto a useEffect.
En este ejemplo simularemos una llamada a una api de clientes.

``` javascript
const [clientes, setClientes] = useState([])

useEffect(() => {

  fetch("urldelaapi")
  .then(response => response.json())
  .then(data => setClientes(data))

},[clientes])
```

De esta manera al montar el componente haremos la llamada a la api, usaremos la funcion para actualizar el estado de nuestros clientes. Ademas usamos clientes como parametro, es decir que mientras este estado no cambie su valor, no ejecutaremos el efecto y evitaremos renders innecesarios dentro de nuestra app.

## Generar id aleatorios

Esta funcion la utilice para la creacion de id aleatorios para mis clientes.

``` javascript
const generateId = () => {
  const random = Math.random().toString(36).substring(2)
  const fecha = Date.now().toString(36)

  return random + fecha
}
```

## Localstorage

Otra herramienta utilizada en el proyecto es la api de localstorage que me permite guardar mis estados y de esta manera mantener los cambios en tiempo real.

## Props

Las props son una parte muy importante de React, estas permiten la comunicacion de informacion entre componentes, algunas caracteristicas de las props son:

- Deben pasarse de padre a hijo, es decir un componente de orden superior en el arbol de elementos puede pasarle props a sus componenetes hijos, pero estos no pueden pasarle props a su componente padre.
- Las props pueden ser cualquier tipo de datos, hasta funciones, de esta manera un padre puede pasarle una funcion a su hijo, este la ejecuta y retorna el valor al padre donde fue inicializada la funcion.
- Las props junto con el state son quienes determinan un nuevo renderizado, cada vez que a un componenete le llegan nuevas props este vuelve a renderizarse para reflejar estos cambios.
- Existe una prop especial llamada prop children, es muy curioso pero con esta prop podemos pasarle como prop a un componente cualquier tipo de datos, hasta html si lo requerimos, en este proyecto cree un componente llamado ErrorMessage que a traves del uso de la propchildren puedo pasarle el contenido que desee y reutilizar este componenete en otras partes de mi app.
