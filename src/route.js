import express from 'express'
import listController from './controllers/list'
import validator from './request'

const router = express.Router()

//สามารถมีพาราได้หล่ยคัวมันจะส่งข้อมูลต่อกันไป
router
  .get('/get', listController.getAllList)
  .get('/get/:id', validator.getByID ,listController.getListByID)
  .post('/post/', validator.create ,listController.createList)
  .put('/put/:id', validator.updateByID ,listController.updateListByID)
  .delete('/delete/:id', listController.deleteListByID)

export default router