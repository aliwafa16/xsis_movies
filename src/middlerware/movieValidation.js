const { body, validationResult } = require("express-validator");

exports.runValidation = (req, res, next) => {
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
     return res
       .status(400)
       .json({
         code: 400,
         status: false,
         message: errors.array(),
         data: "",
       });
   } else {
       next()
   }
};

exports.validationMovie = [
    body("title", "Judul harus diisi").notEmpty(),
    body('description', 'Deskrpsi harus diisi').notEmpty(),
    body('rating', 'Rating harus diisi').notEmpty().isNumeric().withMessage('Rating harus diisi angka')
];
