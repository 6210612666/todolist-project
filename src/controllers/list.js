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
    console.log(result)
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
    const data = { id: req.body.id, topic: req.body.topic, completed: req.body.completed}
    console.log(data)
    try {
      await listModel.create(data)
      res.status(201).json(SUCCESS_CREATED)
    } catch (error) {
      throw ERROR_CREATION
    // console.log(error)
    }
}

//internal input what it should used
const updateListByID = async (req, res) => {
    const { id } = req.params
    // const ID  = {id: req.params.id}
    // console.log("id" ,ID)
    const { topic, completed } = req.body
    const result = await listModel.findOneAndUpdate({id}, {topic, completed})
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