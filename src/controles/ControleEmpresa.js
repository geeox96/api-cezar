const EmpresaModel = require("../modelos/empresaModel");

module.exports = {
  async novo(req, res) {
    const cliente = await EmpresaModel.create(req.body);

    try {
      return res.status(201).json(cliente);
    } catch (error) {
      console.log("Deu erro ai", error);
    }
  },
  async editar(req, res) {
    console.log("req", req);
    console.log("res", res);
    const id = req.params.id;

    if (!(await EmpresaModel.findOne({ _id: id })))
      return res.status(400).send("Erro, ID não encontrada");

    await EmpresaModel.findOneAndUpdate(
      { _id: id },
      { $set: { nome: req.body.nome } }
    );

    return res.send("Nome alterado com sucesso !");
  },
  async apagar(req, res) {
    const id = req.params.id;

    if (!(await EmpresaModel.findOne({ _id: id })))
      return res.status(400).send("Erro, ID não encontrado");

    await EmpresaModel.findOneAndDelete({ _id: id });
    await MovimentacaoEntrada.findOneAndDelete({ idUsuario: id });
    await MovimentacaoSaida.findOneAndDelete({ idUsuario: id });

    return res.send("Usuario deletado com sucesso !");
  },

  async verEmpresasA(req, res) {
    const empresas = await EmpresaModel.find({ app: 1 });
    return res.json(empresas);
  },

  async verEmpresasB(req, res) {
    const empresas = await EmpresaModel.find({ app: 2 });
    return res.json(empresas);
  }
};
