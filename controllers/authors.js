const models = require('../models')

const getAllAuthors = async (request, response) =>
{
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAuthorsByFilter = async (request, response) => {
  const { filter } = request.params

  const author = await models.Authors.findOne({
    where: {
      [models.Op.or]: [

        { id: filter },
        { nameFirst: { [models.Op.like]: `%${filter}%` } },
        { nameLast: { [models.Op.like]: `%${filter}%` } },
      ],
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]

  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}

module.exports = { getAllAuthors, getAuthorsByFilter }
