import mongoose from 'mongoose'

const MessageSchema =  mongoose.Schema({
    conversationId : {
        type : String
    },
    timestamp : String ,
    receiverId:{
        type : String
    } ,
    senderId:{
        type : String
    },
    text:{
        type : String
    },
    type:{
        type : String
    },
    current :{
        type : String
    } 
},
{
    timestamps : true
});

const    message   = mongoose.model('Message',MessageSchema);

export default message