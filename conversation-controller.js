
import Conversation from "./conversation.js";


export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        return response.status(200).json(savedConversation);
    } catch (error) {
        return  response.status(500).json(error);
    }

}

export const getConversation = async(req,res) => {
    try{
        let senderId = req.body.senderId;
        let receiverId = req.body.receiverId;
    let conversation = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    return res.status(200).json(conversation)
    }catch(error){
        return  res.status(500).json(error);
    }
}
