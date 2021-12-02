const express = require('express');
const {Director} = require('../db')

function list(req, res, next) {
    res.send('Lista de directores del sistema');
}

function index(req, res, next) {
    res.send(`director del sistema con ID = ${req.params.id}`)
}

function create(req, res, next) {
    const name = req.body.name;
    const lastname = req.body.lastname;
    let director = new Object({
        name:name,
        lastName:lastName
    })

    Director.create(director).then(
        obj => res.json(obj))
        .catch(err => res.send(err))

}

function replace(req, res, next) {
    res.send(`remplazo del director con ID = ${req.params.id} por otro`)
}

function edit(req, res, next) {
    res.send(`remplazo de propiedades al director con ID = ${req.params.id} `)
}


function destroy(req, res, next) {
    res.send(`Se elimino el director con ID = ${req.params.id} `)
}

module.exports = {
    list,
    index,
    create,
    edit,
    destroy,
    replace
}