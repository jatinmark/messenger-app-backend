import multer from "multer";
import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv'

dotenv.config();
const USERNAME = process.env.DB_USERNAME ; 
const PASSWAORD = process.env.DB_PASSWORD ; 

 const storage = new GridFsStorage({
    url : `mongodb+srv://${USERNAME}:${PASSWAORD}@cluster0.s7xkc4a.mongodb.net/whatsappDB?retryWrites=true&w=majority`
   , file : (req, file) => {
        const match = ['image/png' , 'image/jpg'];
        if (match.indexOf(file.mimeType) === -1) { 
     return `${Date.now()}-file-${file.originalname}` ; 
        }
       return{
        bucketname : 'photos' ,
        filename : `${Date.now()}-file-${file.originalname}` 
       }
}
})

// export default multer({storage});
export const upload = multer({ storage });