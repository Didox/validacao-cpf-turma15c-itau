const Cliente = require("../models/cliente")

test('Dado que eu tenha um CPF  válido, então e devo retornar verdadeiro', () => {
  var cliente = new Cliente("Danilo", "261.627.370-55")
  expect(cliente.validarCPF()).toBe(true);
});

test('Dado que eu tenha um CPF sem pontos e traços válido, então e devo retornar verdadeiro', () => {
  var cliente = new Cliente("Danilo", "26162737055")
  expect(cliente.validarCPF()).toBe(true);
});

test('Dado que eu tenha um CPF inválido, então e devo retornar falso', () => {
  var cliente = new Cliente("Danilo", "26162737345")
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf vazio, deveria retornar falso', () => {
  var cliente = new Cliente("Danilo")
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf com numero inteiro, deveria retornar falso', () => {
  var cliente = new Cliente("Danilo", 1)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um cpf com numero boleano, deveria retornar falso', () => {
  var cliente = new Cliente("Danilo", true)
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um CPF 11111111111, deveria retornar falso', () => {
  var cliente = new Cliente("Danilo", "11111111111")
  expect(cliente.validarCPF()).toBe(false);
});

test('Dado que eu passe um CPF 4444444444444, deveria retornar falso', () => {
  var cliente = new Cliente("Danilo", "4444444444444")
  expect(cliente.validarCPF()).toBe(false);
});