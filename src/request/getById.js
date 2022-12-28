import { param } from 'express-validator'
import validate from './validateMessages'
import customValidators from '../libs/customValidators'

const validateFieldsList = [
  param('id').isInt()
    .withMessage(validate.notInt),

]

export default validateFieldsList
