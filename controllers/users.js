const express = require('express');

function list(req, res, next) {
    res.send('Lista de usuarios del sistema');
}

function index(req, res, next) {
    res.send(`Usuario del sistema con ID = ${req.params.id}`)
}

function create(req, res, next) {
    res.send(`Usuario nuevo`)
}

function replace(req, res, next) {
    res.send(`remplazo del usuario con ID = ${req.params.id} por otro`)
}

function edit(req, res, next) {
    res.send(`remplazo de propiedades al usuario con ID = ${req.params.id} `)
}


function destroy(req, res, next) {
    res.send(`Se elimino el usuario con ID = ${req.params.id} `)
}

module.exports = {
    list,
    index,
    create,
    edit,
    destroy,
    replace
}