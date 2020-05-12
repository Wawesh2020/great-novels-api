const novelsGenres = (connection, Sequelize, genreId, novelId) =>
{
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, references: { model: genreId, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, references: { model: novelId, key: 'id' } },
  }, { paranoid: true })
}

module.exports = novelsGenres
