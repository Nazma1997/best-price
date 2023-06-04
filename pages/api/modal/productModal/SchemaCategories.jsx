import { Schema, model, models } from 'mongoose';
const categories = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    img: {
        type: String,
        trim: true,
        required: true
    },
    stock: {
        type: Number,
        trim: true,
        required: true,
    },
    extraStock: {
        type: Number,
        trim: true,
        required: true,
    },
    path: {
        type: String,
        unique: true,
        trim: true,
        required: true,
    },
    buttonType: String
}, { timestamps: true });
const SchemaCategories = models.categories || model('categories', categories);
export default SchemaCategories