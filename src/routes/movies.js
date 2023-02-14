const express = require("express");
const MovieController = require("../controllers/moviesController");
const router = express.Router();

const { validationMovie, runValidation} = require('../middlerware/movieValidation')


router.get('/', MovieController.getAllMovie)
router.post('/', validationMovie,runValidation, MovieController.addMovie)
router.get('/:id', MovieController.getMovieId)
router.patch('/:id', validationMovie, runValidation, MovieController.updateMovie)
router.delete('/:id', MovieController.deleteMovie)

module.exports = router