import { param, body } from 'express-validator'
import validate from './validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('id').isInt()
    .withMessage(validate.notInt),

]
//   body('topic')
//     .isString()
//     .notEmpty()
//     .withMessage(validate.notEmpty),
//   body('completed')
//     .notEmpty()
//     .withMessage(validate.notEmpty),
// ]

export default validateFieldsList
