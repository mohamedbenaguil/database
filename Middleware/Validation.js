const { body, validationResult } = require("express-validator");

exports.regiterValidation=[
    body('Email', 'Invalid email format').isEmail(),
    body('Password', 'Minimum length of password is 8 characters').isLength({min:8})
]
exports.loginValidation=[
    body('Email', 'Invalid email').isEmail(),
    body("Password", 'Minimum length of password is 8 characters').isLength({min:8})
]
exports.validation = (req, res, next)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    next()
}