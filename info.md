# Iniciando proyecto de React con vite

1- Lo primero que debemos hacer es iniciar vite con el comando npm init vite@latest para descargar la ultima version
2- Luego le damos enter para instalar las dependencias, elegimos la tecnologia a utilizar y luego si usamos JSX o TypeScript
3- Corremos el comando npm install
4- npm run dev para levantar el servidor

URL del servidor : http://127.0.0.1:5173/

## Instalacion de eslint

Instalar eslint como dependencia de desarrollo con npm install eslint -D
Iniciar eslint con npx eslint --init y completar el cuestionario segun los gustos
Ademas para evitar problemas con eslint tuve que agregar algunas reglas en su eslintrc que son las siguientes
1- 'react/react-in-jsx-scope': 'off' esta para evitar tener que ser implicito en las importaciones de state o hooks de react
2- 'linebreak-style': 0 para evitar tener saltos de linea porque trabajo en windows
3- 'react/prop-types': 0 para evitar el error de proptypes porque no lo estamos utilizando

## Añadiendo tailwind css

npm i -D tailwindcss postcss autoprefixer para instalar las dependencias
npx tailwindcss init -p para iniciar la configuracion

en index.css debemos importar los archivos/paquetes de tailwind

@tailwind base;
@tailwind components;
@tailwind utilities;

en el archivo de configuracion de tailwind debemos indicar donde vamos a utilizar este framework

"./index.html", "./src/**/*.jsx"

es recomendable reinicar el servidor para que lea los archivos nuevos.

## Comenzando el proyecto

Este proyecto es un administrador de citas, que permite almacenar pacientes o clientes para llevar un seguimiento
El proyecto utiliza React, Vite y Talwind para el css


## Generar id aleatorios

const generateId = () => {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }