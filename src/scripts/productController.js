import mongoose from 'mongoose';
const itemSchema = require('..models/items.model.js');

const mongo = require('mongoose');

const fillProductPage = async (req, res) => {
    const Item = mongoose.model('Product', itemSchema);
    const {_id} = req.body;
    const item = await JSON.parse(Item.findOneById({_id}));

    console.log(item);

    return res.item
}

export default fillProductPage;

