// import necessary dependencies

const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')

// initialize express.js
const app = express();

app.use(bodyParser.json());
app.use(cors())

// hardcoded recipes

const recipes = [
  {
    id: 1,
    title: "Indian Rice Recipe",
    content: "How to make indian rice ..."
  },
  {
    id: 2,
    title: "Bacon and Sauced Eggs",
    content: "How to make bacon and sauced eggs"
  },
  {
    id: 3,
    title: "Pancake recipes",
    content: "how to make pancakes..."
  },
  {
    id: 4,
    title: "Fish peppersoup recipe",
    content: "how to make it..."
  },
  {
    id: 5,
    title: "Efo Riro",
    content: "how to make it..."
  },
  {
    id: 6,
    title: "Garden Egg soup",
    content: "how to make it..."
  }
];

// return all recipes
app.get("/", (req, res) => {
  res.send(recipes);
});

// return a single recipe by ID
app.get("/:id", (req, res) => {
  const recipe = recipes.filter(
    recipe => recipe.id === parseInt(req.params.id)
  );
  if (recipe.length === 0) return res.status(404).send();
  if (recipe.length > 1) return res.status(500).send();
  res.send(recipe[0]);
});

app.listen(8081, () => {
  console.log("App's running on port 8081");
});