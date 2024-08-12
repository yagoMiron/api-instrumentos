import express from 'express'
import mongoose from 'mongoose'
import { adicionarInstrumento, atualizarInstrumento, listarInstrumentos, removerInstrumento,  } from './controller/Instrumento_controller.js';
const api = express();
const URL_BD = "";
const portaApi = 3000

mongoose.connect(URL_BD);
mongoose.connection.on('connected', () => {
  console.log("API conectada ao BD!");
});
mongoose.connection.on('disconnected', () => {
  console.log("API foi desconectada do BD!");
});
mongoose.connection.on('error', (erro) => {
  console.log("Erro ao conectar no BD! ", erro);
});

api.listen(portaApi, function() {
  console.log("API online")
})

api.get("/instrumentos", listarInstrumentos);
api.post("/instrumento", adicionarInstrumento);
api.put("/instrumento", atualizarInstrumento);
api.delete("/instrumento", removerInstrumento);
