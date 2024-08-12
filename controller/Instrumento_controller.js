import { Instrumento } from "../model/Instrumento_model.js";

export async function listarInstrumentos(req, res) {
  try {
    const instrumentoEncontrado = await Instrumento.find({});
    res.send(instrumentoEncontrado);
  } catch (error) {
    console.log(error);
    res.send({ msg: "[ERRO]: Erro ao listar instrumentos!", descricao: error });
  }
}

export async function adicionarInstrumento(req, res) {
  //req.body OU req.params OU req.query
  const novoInstrumento = req.headers;
  // required: nome, tipo, categoria, marca, preco, quantidade
  if (
    !novoInstrumento.nome ||
    !novoInstrumento.tipo ||
    !novoInstrumento.categoria ||
    !novoInstrumento.marca ||
    !novoInstrumento.preco ||
    !novoInstrumento.quantidade
  ) {
    return res.send({ msg: "[ERRO]: Informar nome e preço!" });
  }

  try {
    await Instrumento.create(novoInstrumento);
    res.send({ msg: "[SUCESSO}: Instrumento adicionado!" });
  } catch (error) {
    console.log(error);
    res.send({
      msg: "[ERRO]: Erro ao cadastrar instrumento!",
      descricao: error,
    });
  }
}

export async function atualizarInstrumento(req, res) {
  const instrumentoAtualizado = req.headers;
  if (
    !instrumentoAtualizado.nome ||
    !instrumentoAtualizado.tipo ||
    !instrumentoAtualizado.categoria ||
    !instrumentoAtualizado.marca ||
    !instrumentoAtualizado.preco ||
    !instrumentoAtualizado.quantidade
  ) {
    return res.send({ msg: "[ERRO]: É necessário Informar nome, tipo, categoria, marca, preço e quantidade!" });
  }

  try {
    const InstrumentoEditado = await Instrumento.findOneAndUpdate(
      { nome: instrumentoAtualizado.nome },
      {
        tipo: instrumentoAtualizado.tipo,
        categoria: instrumentoAtualizado.categoria,
        marca: instrumentoAtualizado.marca,
        preco: instrumentoAtualizado.preco,
        quantidade: instrumentoAtualizado.quantidade,
      }
    );
    if (InstrumentoEditado === null) {
      return res.send({ msg: "[AVISO]: Instrumento não existe no BD" });
    }
    res.send({ msg: "[SUCESSO]: Instrumento editado!" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "[ERRO]: Erro ao editar!", descricao: error });
  }
}

export async function removerInstrumento(req, res) {
  const InstrumentoParaRemover = req.headers;
  if (!InstrumentoParaRemover.nome) {
    return res.send({ msg: "[ERRO]: Informar nome!" });
  }

  try {
    const InstrumentoRemovido = await Instrumento.findOneAndDelete({
      nome: InstrumentoParaRemover.nome,
    });
    if (InstrumentoRemovido == null) {
      return res.send({ msg: "[AVISO]: Instrumento não existe no BD" });
    }
    res.send({ msg: "[SUCESSO]: Instrumento removido com sucesso!" });
  } catch (error) {
    console.log(error);
    res.send({ msg: "[ERRO]: Erro ao remover!", descricao: error });
  }
}
