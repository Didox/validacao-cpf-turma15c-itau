var express = require('express');
var router = express.Router();
const Cliente = require("../models/cliente")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/validar', function(req, res, next) {
  let nome = req.body.nome
  let cpf = req.body.cpf
  let cliente = new Cliente(nome, cpf)
  res.render('validado', { nome: nome, cpf: cpf, validado: cliente.validarCPF() });
});

module.exports = router;
