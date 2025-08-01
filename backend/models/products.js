import Product from '../schemas/products.js';
import mongoose from 'mongoose';

class productsModel {

    async create(product) {
        return await Product.create(product);
    }

    async getAll() {
        return await Product.find();
    }

    async update(id, product) {
        return await Product.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, product, {new: true});
    }

    async delete(id) {
        return await Product.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

    async getFilteredProducts(filters) {
        return await Product.find(filters);
    }
}

export default new productsModel();