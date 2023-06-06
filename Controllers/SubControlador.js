const subModel = require("../Models/SubModel");
const upload = require("../Middlewares/upload");

class SubControlador {
  async save(req, res) {
    try {
      let subs = req.body;
      const max = await subModel.findOne({}).sort({ id: -1 });
      subs.id = max == null ? 1 : max.id + 1;

      if (req.file) {
        sub.fotoPerfil = {
          data: req.file.buffer,
          contentType: req.file.mimetype,
        };
      }

      const results = await subModel.create(subscriber);
      res.status(201).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao salvar o assinante" });
    }
  }

  async list(req, res) {
    try {
      const results = await subModel.find({});
      res.status(200).json(resultado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao listar os assinantes" });
    }
  }

  async filtrar(req, res) {
    try {
      const { filter, value } = req.params;
      let resultado;

      switch (filter) {
        case "nome":
          resultado = await subModel.find({ nome: value });
          break;
        case "sobrenome":
          resultado = await subModel.find({ sobrenome: valor });
          break;
        case "cidade":
          resultado = await subModel.find({ cidade: valor });
          break;
        case "estado":
          resultado = await subModel.find({ estado: valor });
          break;
        case "status":
          resultado = await subModel.find({ status: valor });
          break;
        default:
          return res.status(400).json({ message: "Filtro inválido" });
      }

      res.status(200).json(resultado);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Erro ao listar os assinantes por filtro" });
    }
  }

  async searchID(req, res) {
    try {
      const id = req.params.id;
      const results = await subModel.findOne({ id: id });
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao buscar o assinante por ID" });
    }
  }

  async updating(req, res) {
    try {
      const id = req.params.id;
      const _id = String((await subModel.findOne({ id: id }))._id);
      await subModel.findByIdAndUpdate(String(_id), req.body);
      res.status(200).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro atualizando o assinante" });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const _id = String((await subModel.findOne({ id: id }))._id);
      await subModel.findByIdAndRemove(String(_id));
      res.status(200).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erro ao deletar o assinante" });
    }
  }
}

module.exports = new SubControlador();
