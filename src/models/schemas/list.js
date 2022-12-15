import mongoose from "mongoose";

const listSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true },
        topic: { type: String, required:true},
        completed: { type: Boolean, required:true},
    },
    {
      versionKey: false,
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
      },
    },
  )
  
  const listModel = mongoose.model('allList', listSchema)
  
  export default listModel
  export { listSchema }