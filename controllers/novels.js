const models = require('../models')

const getAllNovels = async (request, response) =>
{
  const novels = await models.Novels.findAll({
    include: [{ model: models.Authors }, { model: models.Genres }]
  })

  return response.send(novels)
}

const getNovelsByFilter = async (request, response) =>
{
  const { filter } = request.params

  const novel = await models.Novels.findOne({
    where: {

      [models.Op.or]: [

        { id: filter },
        { Title: { [models.Op.like]: `%${filter}%` } }
      ],

    },
    include: [
      { model: models.Authors },
      { model: models.Genres }
    ]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = { getAllNovels, getNovelsByFilter }
