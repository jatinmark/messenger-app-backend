import  express  from "express";
import { addUser , getUsers } from "./user-controller.js";
import {newConversation} from './conversation-controller.js'
import { getConversation } from "./conversation-controller.js";
import { newMessage ,getMessages } from "./message-controller.js";
import {upload} from './utils/upload.js';
import { uploadfile , getimage } from "./file-controller.js";



const router = express.Router(); 


router.post('/add', addUser);
router.get("/users",getUsers)
router.post('/conversation/add', newConversation);
router.post('/conversation/get', getConversation);
router.post('/message/add' , newMessage);
router.get('/message/get/:id' , getMessages);
router.post('/file/upload' , upload.single('file') ,  uploadfile);
router.get('/file/:filename' , getimage) ;

  export default router ; 