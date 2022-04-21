const Departamento = require("../models/Departamento");

const DepartamentoController = {
  async listar(req, res) {
    const departamentos = await Departamento.findAll();
    res.json(departamentos);
  },
  async adicionar(req, res) {
    const { nome, descricao } = req.body;
    const novoDepartamento = await Departamento.create({
      nome,
      descricao,
    });
    res.json(novoDepartamento);
  },
  async atualizar(req, res) {
    const { codigo } = req.params;
    const { nome, descricao } = req.body;
    await Departamento.update(
      {
        nome,
        descricao,
      },
      {
        where: {
          codigo,
        }
      });
    const departamentoAtualizado = await Departamento.findByPk(codigo);
    res.status(200);
    return res.json(departamentoAtualizado);
  },
  async deletar(req, res) {
    const { codigo } = req.params;
    await Departamento.destroy({
      where: {
        codigo
      }
    });
    res.json("Departamento deletado")
  },
};

module.exports = DepartamentoController;
