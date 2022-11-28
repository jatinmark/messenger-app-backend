import  express  from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Messages from './dbmessages.js'
import Pusher from "pusher";
import cors from 'cors'
import dotenv from 'dotenv'
import  Router  from "./routes.js";
const app = express();


// const pusher = new Pusher({
//   appId: "1478489",
//   key: "a5001549bc0f9b271c0a",
//   secret: "107da487599a8fce9886",
//   cluster: "ap2",
//   useTLS: true
// });

app.use(cors());
app.use(bodyParser.json());
app.use('/', Router);


dotenv.config();
const USERNAME = process.env.DB_USERNAME ; 
const PASSWAORD = process.env.DB_PASSWORD ; 

//mongodb url 
const mongourl = `mongodb+srv://${USERNAME}:${PASSWAORD}@cluster0.s7xkc4a.mongodb.net/whatsappDB?retryWrites=true&w=majority`

mongoose.connect(mongourl);

const db = mongoose.connection;

db.once('open',() => {
   console.log("db is connected");

// const msgCollection = db.collection('messagecontents');
// const changestream = msgCollection.watch();


// changestream.on("change",(change) => {
//  console.log("change happened" , change);

//   if (change.operationType=== 'insert'){
//     const msgdetail = change.fullDocument;
//     pusher.trigger("messages", "inserted", {
//       message: msgdetail.message,
//       name : msgdetail.name,
//       timestamp: msgdetail.timestamp,
//       received: msgdetail.received
//     });
//  }else{
//   console.log("error in pusher");
//  }
// });
});


app.get('/',(req,res) => res.send("hello"));

// app.get('/message/sync',(req,res) => {

//    Messages.find((err,data) =>{
//      if(err){
//        res.send(err);
//      }else {
//        res.send(data);
//      }
//    })}
//  );
 
// app.post('/message/new',(req,res) => {
//  const dbmessage = req.body 
//   Messages.create(dbmessage,(err,data) =>{
//     if(err){
//       res.send(err);
//     }else {
//       res.send(data);
//     }
//   })}
// );


app.listen(process.env.PORT || 9000, function() {
    console.log("Server started successfully");
  });