import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type:String
    },
    valor:{
        type:String
    }
})

const Color = mongoose.model('producto',colorSchema)
export default Color