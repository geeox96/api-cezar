const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuidv4 = require("uuid/v4");

const EmpresaSchema = new Schema(
  {
    _id: {
      type: String,
      default: uuidv4
    },
    razao_social: {
      type: String,
    },
    nome_fantasia: {
      type: String,
    },
    telefone_comercial: {
      type: Number
    },
    descricao: {
      type: String
    },
    imagem: {
      type: String
    },
    logradouro: {
      type: String,
    },
    numero: {
      type: Number,
    },
    cidade: {
      type: String
    },
    estado: {
      type: String
    },
    cep: {
      type: String
    },
    app: {
      type: Number
    },
    setor: {
      type: String
    },
    responsavel: {
      type: String
    },
    sobre: {
      type: String
    },
    foto: {
      type: String
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("Empresa", EmpresaSchema);
