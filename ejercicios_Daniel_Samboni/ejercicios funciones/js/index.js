import { beers } from "./data.js";

/* 
1-  Generar una función que reciba como parámetro el array de cervezas y un valor de alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la propiedades nombre, alcohol (abv) y "amargor" (ibu)

2-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas más alcohólicas

3-  Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas

4-  Generar una función que reciba como parámetro un array de cervezas, un nombre de propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento, de manera ascendente si el tercero es true o descendente si es false

5-  Generar una función que reciba como parámetro un array de cervezas y un id. La función debe renderizar (renderear, dibujar, pintar, llenar, etc) en un  archivo html una tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del array. Cada fila debe tener los datos que se piden  de cada una de las cervezas.
 */

//ejercicio1
//crear una funcion
//recibir parametros
//recorrer el array y filtrar por nivel etilico
//mapear el array para retornar un nuevo array

const filterBeersByAbv = (beers, abv) => {
  const filteredBeers = beers.filter((beer) => beer.abv <= abv);
  const mapedBeers = filteredBeers.map((beer) => ({
    nombre: beer.name,
    alcohol: beer.abv,
    amargor: beer.ibu
  }))
  return mapedBeers
};

const beersByAbv = filterBeersByAbv(beers, 10)

console.log(beersByAbv)

//ejercicio 2

const getTenBeersMoreAbv = (beers) => {
    const sortedBeers = beers.sort((a,b) => b.abv-a.abv )
    const tenBeers = sortedBeers.slice(0,10)
    return tenBeers;
}

const tenBeers = getTenBeersMoreAbv(beers)
console.log(tenBeers)

//ejercicio 3

const getTenBeersLessibu = (beers) => {
    const sortedBeers = beers.sort((a,b) => a.ibu-b.ibu )
    const tenBeers = sortedBeers.slice(0,10)
    return tenBeers;
}

const tenBeers1 = getTenBeersLessibu(beers)
console.log(tenBeers1)

//ejercicio 4

const getSearchedBeers = (beers, search, asc) => {
   const filteredBeers = beers.filter((beer) => beer.name.toLowerCase().includes(search.toLowerCase()))
   const sortedBeers = filteredBeers.sort((a,b) => asc ? a.name.localeCompare (b.name) : b.name.localeCompare (a.name) )
   return sortedBeers;
}

const searchedBeers = getSearchedBeers(beers,"A",false)
console.log(searchedBeers)

//ejercicio 5

const beerContainer = document.getElementById("beersContainer")
const createRow = (name,abv,ibu) => {
    const tr = document.createElement("tr")
    
    for (let index = 0; index < 3; index++) {
        
        const td = document.createElement("td")
        const name = td.appendChild(name)
        
    }
} 