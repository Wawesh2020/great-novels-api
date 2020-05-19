

module.exports = {
  up: async (queryInterface) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER ' },
    */
    await queryInterface.bulkInsert('authors', [
      { nameFirst: 'Bram', nameLast: 'Stoker' },
      { nameFirst: 'Oscar', nameLast: 'Wilde' },
      { nameFirst: 'Alice', nameLast: 'Walker' },
      { nameFirst: 'Leo', nameLast: 'Tolstoy' },
      { nameFirst: 'Charles', nameLast: 'Dickens' },
      { nameFirst: 'Arthur', nameLast: 'Miller' },
      { nameFirst: 'Alexandre', nameLast: 'Dumas' },
      { nameFirst: 'Arthur Conan', nameLast: 'Doy' },
      { nameFirst: 'Robert Louis', nameLast: 'Stevens' },
      { nameFirst: 'Fyodor', nameLast: 'Dostoyevsky' },
      { nameFirst: 'Agatha', nameLast: 'Christie' },
      { nameFirst: 'Ray', nameLast: 'Bradbury' },
      { nameFirst: 'George', nameLast: 'Orwell' },
      { nameFirst: 'H.G', nameLast: 'Wel' },
      { nameFirst: 'Chinua', nameLast: 'Achebe' },

    ])

    await queryInterface.bulkInsert('genres', [
      { name: 'Adventure' },
      { name: 'African Literature' },
      { name: 'Crime' },
      { name: 'Drama' },
      { name: 'Dystopia' },
      { name: 'Fantasy' },
      { name: 'Fiction' },
      { name: 'French Literature' },
      { name: 'Gothic' },
      { name: 'Historical Fiction' },
      { name: 'Horror' },
      { name: 'Mystery' },
      { name: 'Plays' },
      { name: 'Russian Literature' },
      { name: 'Science Fiction' },
      { name: 'Thriller' },
      { name: 'Time Travel' },
      { name: 'War' },
    ])

    await queryInterface.bulkInsert('novels', [
      { title: 'Dracula', authorId: 1 },
      { title: 'The Picture of Dorian Gray', authorId: 2 },
      { title: 'The Color Purple', authorId: 3 },
      { title: 'War and Peace', authorId: 4 },
      { title: 'A Tale of Two Cities', authorId: 5 },
      { title: 'The Crucible', authorId: 6 },
      { title: 'The Three Musketeers', authorId: 7 },
      { title: 'The Hound of the Baskervilles', authorId: 8 },
      { title: 'The Strange Case of Dr. Jekyll and Mr. Hyde', authorId: 9 },
      { title: 'Crime and Punishment', authorId: 10 },
      { title: 'Murder on the Orient Express', authorId: 11 },
      { title: 'Fahrenheit 451', authorId: 12 },
      { title: 'Animal Farm', authorId: 13 },
      { title: 'The Time Machine', authorId: 14 },
      { title: 'Things Fall Apart', authorId: 15 },
    ])

    return queryInterface.bulkInsert('novelsGenres', [
      { novelId: 1, genre: 7 },
      { novelId: 1, genre: 11 },
      { novelId: 1, genre: 6 },
      { novelId: 2, genre: 7 },
      { novelId: 2, genre: 11 },
      { novelId: 2, genre: 9 },
      { novelId: 2, genre: 6 },
      { novelId: 3, genre: 7 },
      { novelId: 3, genre: 10 },
      { novelId: 4, genre: 7 },
      { novelId: 4, genre: 10 },
      { novelId: 4, genre: 18 },
      { novelId: 4, genre: 14 },
      { novelId: 5, genre: 7 },
      { novelId: 5, genre: 10 },
      { novelId: 6, genre: 7 },
      { novelId: 6, genre: 10 },
      { novelId: 6, genre: 4 },
      { novelId: 6, genre: 13 },
      { novelId: 7, genre: 7 },
      { novelId: 7, genre: 10 },
      { novelId: 7, genre: 1 },
      { novelId: 7, genre: 8 },
      { novelId: 8, genre: 7 },
      { novelId: 8, genre: 12 },
      { novelId: 8, genre: 3 },
      { novelId: 8, genre: 16 },
      { novelId: 9, genre: 7 },
      { novelId: 9, genre: 12 },
      { novelId: 9, genre: 15 },
      { novelId: 9, genre: 11 },
      { novelId: 10, genre: 7 },
      { novelId: 10, genre: 14 },
      { novelId: 10, genre: 12 },
      { novelId: 11, genre: 7 },
      { novelId: 11, genre: 12 },
      { novelId: 12, genre: 7 },
      { novelId: 12, genre: 15 },
      { novelId: 12, genre: 5 },
      { novelId: 13, genre: 7 },
      { novelId: 13, genre: 15 },
      { novelId: 13, genre: 5 },
      { novelId: 14, genre: 7 },
      { novelId: 14, genre: 15 },
      { novelId: 14, genre: 17 },
      { novelId: 15, genre: 7 },
      { novelId: 15, genre: 10 },
      { novelId: 15, genre: 2 },
    ])
  },

  down: async (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users' },
    */

    await queryInterface.bulkDelete('novelsGenres')

    await queryInterface.bulkDelete('novels')

    await queryInterface.bulkDelete('genres')

    return queryInterface.bulkDelete('authors')
  }
}
