import { param, body } from 'express-validator'
import validate from './validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('id').custom(customValidators.isObjectID)
    .withMessage(validate.isObjectID),
  body('topic')
    .isString()
    .notEmpty()
    .withMessage(validate.notEmpty),
  body('completed')
    .notEmpty()
    .withMessage(validate.notEmpty),
]

export default validateFieldsList
