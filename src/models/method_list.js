import List from './schemas/list'

const create = (data, options) => List.create(data, options)
const deleteOne = (query) => List.deleteOne(query)
const deleteMany = (query) => List.deleteMany(query)
const find = (query, fields = {}, options = {}) => List.find(query, fields, options).lean()
const findOne = (query, fields = {}, options = {}) => List.findOne(query, fields, options).lean()
const findOneAndUpdate = (condition, data) => List.findOneAndUpdate(condition, data, { upsert: true }).exec()

export default {
  create,
  deleteOne,
  deleteMany,
  find,
  findOne,
  findOneAndUpdate,
}