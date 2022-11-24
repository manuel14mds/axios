import axios from 'axios'

const request = async () => {
    const result = await axios.get('https://cafectg-production.up.railway.app/api/products')
    console.log(result.data)
}
const request2 = async () => {
    const product = {
        name: "Café 8",
        description: "descripcion prueba numero 5",
        thumbnail: "",
        price: 25.22,
        stock: 20
    }
    const response = await axios('https://cafectg-production.up.railway.app/api/products', {
        method: 'post',
        data: product
    })
    console.log(response.data);
}

request()// get products
request2()// add product