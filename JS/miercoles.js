const precios = [100, 200 ,300];

const conIva = precios.map(precios => precios * 1.22);
console.log(conIva);

const menosIva = precios.map(precios => precios * 0.82);
console.log(menosIva);

const productos = [
    {nombre: 'Laptop', precio:1000, stock:3},
    {nombre: 'Mouse', precio:20, stock:15},
    {nombre: 'Teclado', precio:80, stock:8}
];
console.log(productos);

const caros = productos.filter(
    p=>p.precio>=50
);
console.log(caros);

const menor10 = productos.filter(
    s=>s.stock<=10
);
console.log(menor10);