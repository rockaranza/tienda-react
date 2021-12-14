const producto = [
    {id: 1, img: 'http://imgfz.com/i/DreEmIp.png', name: 'Item 1', description: 'Descripción del item 1', price: '10'},
];

export const getProduct = new Promise ((resolve) => {
    // setTimeout(()=>{
    //     resolve(producto)
    // }, 3000)
    resolve(producto);
})
