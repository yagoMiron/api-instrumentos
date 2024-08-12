import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const SchemaInstrumentoMusical = new Schema({ 
    nome: { type: String, required: true, unique: true}, // guitarra Les paul preta
    tipo: { type: String, required: true, unique: false}, // guitarra
    categoria: { type: String, required: true, unique: false}, // Instrumento de Corda
    marca: { type: String, required: true, unique: false}, // Strinberg
    preco: { type: Number, required: true, unique: false}, // 1200,00
    quantidade: { type: Number, required: true, unique: false}, // 8
});

export const Instrumento = mongoose.model("Instrumento", SchemaInstrumentoMusical);