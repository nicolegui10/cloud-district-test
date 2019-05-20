This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Cloud District Test

In the project directory, you can run:

### Run `yarn install amd yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Tecnologias Usadas`

`React`
`React - Material UI`
`Redux`
`axios`
`React Router`

### `Aclaraciones`

Debido a ciertas inconsistencias con la API, la edicion de los elementos es "Temporal" ya que cuando hacemos el `patch` a reqres, esto no modifica la lista que estamos utilizando para la paginacion, al igual que la creacion.

El login social fue realizado con `firebase` herramienta que permitio facilitar esto debido a compliaciones que presentaban tanto Facebook como Google

A implementar: podria haberse hecho uso de Apollo, no lo utilice al igual que tampoco lo hice con react-admin, debido a que queria mostrar el concepto general implementado por redux y que se pueda ver plasmado en la prueba.

Con mas tiempo habría agregado test unitarios y hacer un uso especificos de ciertos componentes para la parte mobile dedicando mas trabajo a lo responsive. 

El uso de storybooks es una buena alternativa en cuanto a la implementacion de UX, me parece una buena herramienta a utilizar en proyectos grandes o compañias que poseen mas de un proyecto y necesitan alinear la experencia de usuario de sus aplicaciones. 


