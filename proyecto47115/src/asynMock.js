

const products = [

    {
        id: 1,
        name: "Katamino",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_985930-MLA44709262762_012021-F.jpg",
        description: "Juego de estrategia para disfrutar solo o con un amigo",
        stock:12,
        price:29999

    },

    {
        id: 2,
        name: "Party Game Just One",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_813963-MLA48357267277_112021-F.jpg",
        description: "Un jugador debe adivinar una palabra por turno, los demás deben darle una pista que elige sin ponerse de acuerdo con el resto, lo mas original posible, para que en la suma de todas las pistas, el jugador que adivina pueda saber que palabra es. Pero ¡ojo!, las pistas idénticas quedarán anuladas, ¡por eso es fundamental que las pistas sean originales!",
        stock:15,
        price:18000

    },

    {
        id: 3,
        name: "Figo",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_875537-MLA52234941576_112022-F.jpg",
        description: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Figo 2022 vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
        stock:25,
        price:25000
    },

    {
        id: 4,
        name: "Alfajor de Chocolate x 12 u" ,
        category: "snacks",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_626927-MLA31662174158_082019-F.webp",
        description: "Alfajor cachafaz relleno con dulce de leche y bañado con chocolate negro,ideal para la merienda,cumpleaños,reuniones",
        price:9920
    },

    {
        id: 5,
        name: "Vauquita x 18 u",
        category: "snacks",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_956500-MLA42851359302_072020-F.webp",
        description: "El snack ideal para leer un libro",
        stock:12,
        price:3234
    },

    {
        id: 6,
        name: "Biznikke x 12 u",
        category: "snacks",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_727535-MLA46468890120_062021-F.webp",
        description: "Ideal para fiestas y eventos, Sabor irresistible que encanta a todos",
        stock:93,
        price:3000
    },
    {
        id: 7,
        name: "La noche de la Usina",
        category: "libros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_620038-MLU51921076809_102022-F.webp",
        description: "Literatura y ficción",
        stock: 29,
        price:7000
    },
    {
        id: 8,
        name: "La Sombra del Viento",
        category: "libros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_993048-MLA70775522568_072023-F.webp",
        description: "Un amanecer de 1945, un muchacho es conducido por suápadre a un misterioso lugar oculto en el corazón de laáciudad vieja: el Cementerio de los Libros Olvidados. Allí,áDaniel Sempere encuentra un libro maldito que cambia elárumbo de su vida y le arrastra a un laberinto de intrigas yásecretos enterrados en el alma oscura de la ciudad.",
        stock: 54,
        price:8000
    },
    {
        id: 9,
        name: "El Camino del Artista",
        category: "libros",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_815950-MLA32791298180_112019-F.webp",
        description: "Autoayuda, Creatividad",
        stock:9,
        price:12343
    }








  

]


export function getProducts(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export function getProductsById(id){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===id))
        },500)
    }
    )

}


export const getProductsByCategory = (categoryId) => {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))

        }, 500)

    })

};

