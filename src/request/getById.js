import { param } from 'express-validator'
import validate from './validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('id').custom(customValidators.isObjectID)
    .withMessage(validate.isObjectID),
]

export default validateFieldsList
