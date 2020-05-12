const express = require('express')
const { getAllAuthors, getAuthorsById } = require('./controllers/authors')
const { getAllNovels, getNovelsById } = require('./controllers/novels')
const { getAllGenres, getGenresById } = require('./controllers/genres')


const app = express()

app.get('/authors', getAllAuthors)

app.get('/authors/:id', getAuthorsById)

app.get('/novels', getAllNovels)

app.get('/novels/:id', getNovelsById)

app.get('/genres', getAllGenres)

app.get('/genres/:id', getGenresById)



app.listen(1337, () => {
  console.log('Listening on port 1337...') // eslint-disable-line no-console
})



