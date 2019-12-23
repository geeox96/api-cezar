const express = require("express");
const rotas = express.Router();
const ControleEmpresas = require("../controles/ControleEmpresa");

rotas.post("/empresas", ControleEmpresas.novo);
rotas.put("/empresas/:id", ControleEmpresas.editar);
rotas.delete("/empresas/:id", ControleEmpresas.apagar);
rotas.get("/empresasA", ControleEmpresas.verEmpresasA);
rotas.get("/empresasB", ControleEmpresas.verEmpresasB);

module.exports = rotas;
