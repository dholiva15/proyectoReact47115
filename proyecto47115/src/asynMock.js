

const products = [

    {
        id:1,
        name: "Katamino",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_985930-MLA44709262762_012021-F.jpg",
        description: "Juego de estrategia para disfrutar solo o con un amigo",
        stock:12,
        price:29999

    },

    {
        id:2,
        name: "Party Game Just One",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_813963-MLA48357267277_112021-F.jpg",
        description: "Un jugador debe adivinar una palabra por turno, los demás deben darle una pista que elige sin ponerse de acuerdo con el resto, lo mas original posible, para que en la suma de todas las pistas, el jugador que adivina pueda saber que palabra es. Pero ¡ojo!, las pistas idénticas quedarán anuladas, ¡por eso es fundamental que las pistas sean originales!",
        stock:15,
        price:18000

    },

    {
        id:3,
        name: "Figo",
        category: "juegos",
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_875537-MLA52234941576_112022-F.jpg",
        description: "¿Qué mejor plan para una tarde de lluvia que un juego de mesa? Con el Figo 2022 vas a crear divertidos recuerdos y pasar momentos inolvidables junto a tus amigos y amigas. Con este pasatiempo entretenido las risas están aseguradas.",
        stock:25,
        price:25000
    },


  

]


export function getProducts(){

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export function getProductsById(productId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=>prod.id===productId))
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

