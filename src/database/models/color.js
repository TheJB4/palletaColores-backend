import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type:String
    }
})

const Color = mongoose.model('color',colorSchema)
export default Color