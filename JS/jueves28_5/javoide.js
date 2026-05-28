
const productos = [
    {nombre: 'Laptop', precio:1000, stock:3, categoria: 'HW'},
    {nombre: 'Mouse', precio:20, stock:15, categoria: 'HW'},
    {nombre: 'Teclado', precio:80, stock:8, categoria: 'HW'},
    {nombre: 'Windows', precio:80, stock:8, categoria: 'SW'},
    {nombre: 'IOS', precio:80, stock:8, categoria: 'SW'}
];
console.log(productos);

const TotalCatsw = productos.reduce(
    (stock, posicion) => if stock + posicion.stock,0
    
);
console.log(TotalCatsw);


const TotalCathw = productos.reduce(
    (stock, categoria) => stock + posicion,0
    
);
console.log(TotalCathw);



const TotalCat = productos.reduce(
    (stock, categoria) => stock + posicion,0
    
);
console.log(TotalCat);



