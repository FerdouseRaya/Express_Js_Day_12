const { body} = require("express-validator");

const validator = {
    addItem:[
      body("student_id")
      .exists()
      .withMessage("id was not provided"),
      body("student_name")
      .exists()
      .withMessage("student_name was not provided")
      .bail()
      .notEmpty()
      .withMessage("student_name cannot be empty")
      .bail()
      .isString()
      .withMessage("student_name must be a string")
      .isLength({ max: 30 })
      .withMessage("Name cannot be more than 30 characters"),
    body("department")
      .exists()
      .withMessage("department was not provided")
      .bail()
      .notEmpty()
      .withMessage("department cannot be empty")
      .bail()
      .isString()
      .withMessage("department must be a string"),
      body("cgpa")
      .exists()
      .withMessage("cgpa was not provided")
      .bail()
      .isFloat({ min: 0, max: 4 })
      .withMessage("cgpa must be a number between 0 and 4")

    ]
}
const authValidator ={
  signup:[
    body("email")
    .exists()
    .withMessage("Email must be provided")
    .bail()
    .isString()
    .withMessage("Email must be a String")
    .bail()
    .isEmail()
    .withMessage("Provide the right email formate"),
    body("password")
    .exists()
    .withMessage("Password must be provided")
    .bail()
    .isString()
    .withMessage("Password must be a String")
    .isStrongPassword({minLength: 1, minLowercase:1, minUppercase: 1, minSymbols:1, minNumbers:1 })
    .withMessage("Password should be atleast 8 characters, with a minimum of 1 lower case, 1 upper case, 1 number, and 1 symbol.")

  ]
}
module.exports = {validator,authValidator};
