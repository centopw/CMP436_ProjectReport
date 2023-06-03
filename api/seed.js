const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main() {
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    try {
        await client.connect();

        const productsCollection = client.db("ecommerce").collection("products");

        let categories = ['jeans'].map((category) => { return { name: category } });
        // let productSizes = ['XS', 'S', 'M', 'L', 'XL'].map((productSize) => { return { name: productSize } });
        // let productColors = ['white', 'black', 'red', 'blue', 'yellow', 'green'].map((productColor) => { return { name: productColor } });

        let imageUrls = [
            'https://product.hstatic.net/1000360022/product/7u8a0055_1e83f317fce344ab898cd6acf9b7e680.jpg',
            'https://product.hstatic.net/1000360022/product/dsc03873_7e3da0c640664cdbba373b931e461bda.jpg',
            'https://product.hstatic.net/1000360022/product/01__7__7401f566ac0b47b3b212502ea7d9d8c2.jpg',
            'https://product.hstatic.net/1000360022/product/dsc01177_6d52e42aea32483db8fcd047e156b91a.jpg',
            'https://product.hstatic.net/1000360022/product/dsc07103_6244ff42f5804876b0242201c39e9a7c.jpg',
            'https://product.hstatic.net/1000360022/product/dsc09890_1ace80fac14c4516a4cc4b2baa2a6775.jpg',
            'https://product.hstatic.net/1000360022/product/dsc06621_8e60727b5bec4da09e6a2d99cb178aff.jpg',
            'https://product.hstatic.net/1000360022/product/dsc09466_5ab46afe9a384274b1754404f8a946d1.jpg',
        ]
        let shortImageUrls = [
            'https://product.hstatic.net/1000360022/product/7u8a0055_1e83f317fce344ab898cd6acf9b7e680.jpg',
            'https://product.hstatic.net/1000360022/product/dsc03873_7e3da0c640664cdbba373b931e461bda.jpg',
            'https://product.hstatic.net/1000360022/product/01__7__7401f566ac0b47b3b212502ea7d9d8c2.jpg',
            'https://product.hstatic.net/1000360022/product/dsc01177_6d52e42aea32483db8fcd047e156b91a.jpg',
            'https://product.hstatic.net/1000360022/product/dsc07103_6244ff42f5804876b0242201c39e9a7c.jpg',
            'https://product.hstatic.net/1000360022/product/dsc09890_1ace80fac14c4516a4cc4b2baa2a6775.jpg',
            'https://product.hstatic.net/1000360022/product/dsc06621_8e60727b5bec4da09e6a2d99cb178aff.jpg',
            'https://product.hstatic.net/1000360022/product/dsc09466_5ab46afe9a384274b1754404f8a946d1.jpg',
        ]

        let products = [];
        for (let i = 0; i < 15; i+=1) {
            let newProduct = {
                title: faker.commerce.productName(),
                desc: faker.commerce.productDescription(),
                img: _.sample(imageUrls),
                categories: faker.helpers.arrayElement(['coat']),
                size: faker.helpers.arrayElement(['XS', 'S', 'M', 'L', 'XL']),
                color: faker.helpers.arrayElement(['white']),
                price: faker.commerce.price(),
                createAt: faker.date.past(),
                inStock: faker.datatype.boolean(),
                updateAt: faker.date.recent(),
            };
            products.push(newProduct);
        }
        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();