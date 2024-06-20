import { productDb } from "../database/db.js";
import { Product } from "../models/product.model.js";
import { validateProductsLength } from "../helpers/validateProductsLength.js";

export const getAll = (req, res) => {
    res.status(200).json(productDb);
};

export const getById = (req, res) => {
    const { id } = req.params;
}

export const sortByPrice = (req, res) => {
    const { order } = req.params;
}

export const sortByCategory = (req, res) => {
    const { category } = req.params;
}

export const searchByName = (req, res) => {
    const { searchQuery } = req.params;
}

export const create = (req, res) => {
    const body = req.body;
    const { name, price, discountPercentage, category, image } = req.body;
}

export const edit = (req, res) => {
    const { id } = req.params;
}

export const findByIdAndDelete = (req, res) => {
    const { id } = req.params;
}

