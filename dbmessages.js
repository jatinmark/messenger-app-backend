import mongoose from 'mongoose'

const whatsappschema =  mongoose.Schema({
    message : String ,
    timestamp : String ,
    name: String,
    received : Boolean
});

export default mongoose.model('messagecontent',whatsappschema);