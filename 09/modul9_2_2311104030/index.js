const express = require('express');
const app = express();
app.use(express.json());

let movies = [
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    stars: ["Tim Robbins", "Morgan Freeman"],
    description: "Two imprisoned men bond over a number of years..."
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    stars: ["Marlon Brando", "Al Pacino"],
    description: "The aging patriarch of an organized crime dynasty..."
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    stars: ["Christian Bale", "Heath Ledger"],
    description: "When the menace known as the Joker wreaks havoc..."
  }
];

app.get('/api/Movies', (req, res) => {
  res.json(movies);
});

app.get('/api/Movies/:id', (req, res) => {
  const movie = movies[parseInt(req.params.id)];
  if (movie) res.json(movie);
  else res.status(404).send('Movie not found');
});

app.post('/api/Movies', (req, res) => {
  movies.push(req.body);
  res.status(201).send('Movie added');
});

app.delete('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    movies.splice(id, 1);
    res.send('Movie deleted');
  } else {
    res.status(404).send('Movie not found');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
