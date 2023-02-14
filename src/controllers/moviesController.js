const MovieModel = require('../models/moviesModel')


const MovieController = {
    getAllMovie: async (req, res) => {
        try {
            const movies = await MovieModel.findAll();
                 res.json({
                   code: 200,
                   status: true,
                   message: "Succesfull",
                   data: movies,
                 })
        } catch (error) {
           res.status(error.code).json({
             code: error.code,
             status: false,
             message: error.message,
             data: "",
           });
        }
    },
    getMovieId: async (req, res) => {
        try {
            
            let { id } = req.params
            const movie = await MovieModel.findOne({
                where: {
                    id:id
                }
            })
            if (movie) {
                 res.status(200).json({
                   code: 200,
                   status: true,
                   message: "Succesfull",
                   data: movie,
                 });
            } else {
                 throw {
                   code: 404,
                   message: "Movie tidak ditemukan",
                 };
            }
        } catch (error) {
           res.status(error.code).json({
             code: error.code,
             status: false,
             message: error.message,
             data: "",
           });
        }
    },

    addMovie: async (req, res) => {
        try {
            let data = {
                title: req.body.title,
                description: req.body.description,
                rating: req.body.rating,
                image: '',
            }

            let check_movie = await MovieModel.findOne({
                where: {
                    title:req.body.title
                }
            })

            if (check_movie) {
               throw {
                 code: 400,
                 message: "Judul sudah ada",
               };
            } else {
                const movies = await MovieModel.create(data);
                res.status(201).json({
                  code: 201,
                  status: true,
                  message: "Succesfull",
                  data: data,
                });
            }
        
        } catch (error) {
            res.status(error.code).json({
              code: error.code,
              status: false,
              message: error.message,
              data: "",
            });
        }
    },

    updateMovie: async (req, res) => {
        try {
            let {id }= req.params
            let data = {
              title: req.body.title,
              description: req.body.description,
              rating: req.body.rating,
              image: "",
            };

            let check_movie = await MovieModel.findOne({
                where: {
                    id:id
                }
            })
            if (check_movie) {
                 const movie = await MovieModel.update(data, {
                   where: {
                     id: id,
                   },
                 });
                 res.status(201).json({
                   code: 201,
                   status: true,
                   message: "Succesfull",
                   data: data,
                 });
            } else {
                  throw {
                    code: 404,
                    message: "Movie tidak ditemukan",
                  };
            }
        } catch (error) {
            res.status(error.code).json({
              code: error.code,
              status: false,
              message: error.message,
              data: "",
            });
        }
    },
    deleteMovie: async (req, res) => {
        try {
            let { id } = req.params

            let check_movie = await MovieModel.findOne({
                where: {
                    id:id
                }
            })
            if (check_movie) {
               let movie = await MovieModel.destroy({
                 where: {
                   id: id,
                 },
               });
              res.status(200).json({
                code: 200,
                status: true,
                message: "Succesfull",
                data: ''
              }); 
            } else {
                 throw {
                   code: 404,
                   message: "Movie tidak ditemukan",
                 };
            }
           
        } catch (error) {
              res.status(error.code).json({
                code: error.code,
                status: false,
                message: error.message,
                data: "",
              });
        }
    }
}

module.exports = MovieController