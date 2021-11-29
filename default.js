import {products} from './constants/products.js';
import Product from './model/productSchema.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('Data stored in database successfully');
    } catch (error) {
        console.log(error);
    }
}

export default DefaultData;