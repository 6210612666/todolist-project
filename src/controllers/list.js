import listModel from '../models/method_list'
import {
  NOT_FOUND_DATA, ERROR_CREATION,
} from '../constants/errors/unsuccess'
import {
  SUCCESS_CREATED,
} from '../constants/success'


const getAllList = async (req, res) => {
    const result = await listModel.find()
    // res.setHeader('getall', result)
    // res.send(result)
    res.status(200).json(result)
    // res.end()
}

const getListByID = async (req, res) => {
    const ID = {id: req.params.id}
    const result = await listModel.find(ID)
    if (!result) {
      throw NOT_FOUND_DATA
    }
    res.status(200).json(result)
}


const deleteListByID = async (req, res) => {
    const ID  = {id: req.params.id}
    const result = await listModel.deleteOne(ID)
    // const result = await listModel.deleteMany(ID)
    res.status(200).json(result)
}

// id must unique
const createList = async (req, res) => {
    const { id, topic, completed } = req.body
    try {
      await listModel.create({ id, topic, completed})
      res.status(201).json(SUCCESS_CREATED)
    } catch (error) {
      throw ERROR_CREATION
    // console.log(error)
    }
}

//internal input what it should used
const updateListByID = async (req, res) => {
    const { ID } = req.params.id
    const { topic, completed_b } = req.body
    const result = await listModel.findOneAndUpdate(ID, {topic: topic, completed: completed_b})
    res.status(200).json(result)
  }


  //validate should repeat

export default {
    createList,
    deleteListByID,
    getAllList,
    getListByID,
    updateListByID,
  }