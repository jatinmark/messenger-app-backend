import  Grid   from "gridfs-stream";
import mongoose from "mongoose";

 const Url = 'http://localhost:9000' ; 

 let gfs , gridfsbucket ;
 const conn = mongoose.connection;
 conn.once('open' , ()=>{
   gridfsbucket = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketname : 'fs'
   });
   gfs = Grid(conn.db,mongoose.mongo );
   gfs.collection('fs');
 })

export const uploadfile = async(req,res) => {
         if(!req.file){
            return res.status(400).json('file not found');
         }
    const imageurl  = `${Url}/file/${req.file.filename}`;
    return res.status(200).json(imageurl);

}

export const getimage = async(req,res) =>{
   try{
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readstream = gridfsbucket.openDownloadStream(file._id);
        readstream.pipe(res);
   }catch(error){
      return res.status(500).json(error.message);
   }

}