const Sequelize = require('sequelize')
const authorsModel = require('./authors')
const novelsModel = require('./novels')
const genresModel = require('./genres')
const novelsGenresModel = require('./novelsGenres')

const connection = new Sequelize('books', 'books', 'bo0K$!', {
  host: 'localhost', dialect: 'mysql'
})

const Authors = authorsModel(connection, Sequelize)
const Novels = novelsModel(connection, Sequelize)
const Genres = genresModel(connection, Sequelize)
const novelsGenres = novelsGenresModel(connection, Sequelize, Genres, Novels)

Novels.belongsTo(Authors)
Authors.hasMany(Novels)
Genres.belongsToMany(Novels, { through: novelsGenres })
Novels.belongsToMany(Genres, { through: novelsGenres })

module.exports = {
  Authors,
  Novels,
  Genres,
  novelsGenres
}
