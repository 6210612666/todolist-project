import { body } from 'express-validator'
import validate from './validateMessages'

const validateFieldsList = [
  body('id')
    .notEmpty()
    .withMessage(validate.notEmpty),
  body('topic')
    .isString()
    .notEmpty()
    .withMessage(validate.notEmpty),
  body('completed')
    .notEmpty()
    .withMessage(validate.notEmpty),
]

export default validateFieldsList
