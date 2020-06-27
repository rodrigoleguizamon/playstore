let db = require("../database/models");
let Sequelize = db.sequelize;
const Op = Sequelize.Op

const indexControllers = {
    listar: function (req, res) {
        db.Application.findAll({
                include: [{
                    association: "categories"
                }]
            })
            .then(function (data) {
                return res.render('index', {
                    applications: data
                })
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })

    },
    listarPelis: function (req, res) {
        db.Application.findAll({
                include: [{
                    association: "categories"
                }]
            })
            .then(function (data) {
                return res.render('apps/peliculas', {
                    applications: data
                })
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })

    },
    listarLibros: function (req, res) {
        db.Application.findAll({
                include: [{
                    association: "categories"
                }]
            })
            .then(function (data) {
                return res.render('apps/libros', {
                    applications: data
                })
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })

    },
    listarMusica: function (req, res) {
        db.Application.findAll({
                include: [{
                    association: "categories"
                }]
            })
            .then(function (data) {
                return res.render('apps/musica', {
                    applications: data
                })
            })
            .catch(err => {
                res.send('Hubo un error, intentalo mas tarde')
            })

    },
    search: function (req, res) {
        db.Application.findAll({
            include: [

                {
                    association: "categories",
                    where: {
                        [db.Sequelize.Op.or]: [{
                            name: {
                                [db.Sequelize.Op.like]: '%' + req.body.palabra + '%'
                            }
                        }]
                    }

                }
            ],
            where: {

                [db.Sequelize.Op.or]: [{
                        name: {
                            [db.Sequelize.Op.like]: '%' + req.body.palabra + '%'
                        }
                    },
                    {
                        description: {
                            [db.Sequelize.Op.like]: '%' + req.body.palabra + '%'
                        }
                    },

                ]
            }
        }).then(function (apps) {
            res.render('search', {
                applications: apps
            })
        })
    }

}

module.exports = indexControllers;