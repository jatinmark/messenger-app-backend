import Message from "./message.js"
import Conversation from "./conversation.js";

export const newMessage = async(req,res)=>{
    try{
        let newmessage = new Message(req.body)
        await newmessage.save() ;  
        await Conversation.findByIdAndUpdate(req.body.conversationId , {message : req.body.text})
        return res.status(200).json('message saved')
    }catch(error){
        return res.status(500).json(error);
    }

}

export const getMessages = async(req,res)=>{
try{
     const messages =  await Message.find({conversationId : req.params.id} ) 
     return res.status(200).json(messages)
}catch(error){
    return res.status(500).json(error);
}
}