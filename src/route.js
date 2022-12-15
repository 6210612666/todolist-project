import express from 'express'
import listController from './controllers/list'
import validator from './request'

const router = express.Router()

router
  .get('/list', listController.getAllList)
  .get('/list/:id', validator.getByID ,listController.getListByID)
  .post('/list', validator.create ,listController.createList)
  .put('/list/:id', validator.updateByID ,listController.updateListByID)
  .delete('/list/:id', listController.deleteListByID)

export default router