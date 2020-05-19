const express = require('express')
const { getAllAuthors, getAuthorsByFilter } = require('./controllers/authors')
const { getAllGenres, getGenresById } = require('./controllers/genres')
const { getAllNovels, getNovelsByFilter } = require('./controllers/novels')



const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:filter', getAuthorsByFilter)


app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenresById)

app.get('/novels', getAllNovels)

app.get('/novels/:filter', getNovelsByFilter)




app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})



