var jwt = require('jsonwebtoken');


exports.createAccount = function(req,res){
 // 1 connect to db
 const client = require('mongodb').MongoClient;

 client.connect('mongodb://localhost:27017').then((server)=>{

 const db = server.db("ttc-demo-fullstack-js");


 const body = req.body;
 
 const user = {
     username: body.username,
     password:body.password,
     fullname:body.fullname, 
 }

 db.collection("users").insertOne(user).then(()=>{
     res.send({ success:true, message:'Account created successfully.' })
 }).catch(()=>{
     res.send({ success:false, message:"Something went wrong, please try again." })
 })


 }).catch((err)=>{
     console.log(err);
     res.send({ success:false,message:'err db' })
 })

}



exports.auth = function(req,res){
// 1 connect to db
const client = require('mongodb').MongoClient;

client.connect('mongodb://localhost:27017').then((server)=>{

const db = server.db("ttc-demo-fullstack-js");


const body = req.body;

const user = {
    username: body.username,
    password:body.password
}



db.collection("users").findOne( user ).then((result)=>{
    if (result == null ) {
        res.send({ success:false, message:"Wrong username or password." })
    } else {
        // we need to create a new token for the user !!!!

        var token = jwt.sign( result  , 'secret-key-exmpl123');

        res.send({ token:  token })


    }
}).catch((err)=>{
    res.send({ success:false, message:"Something went wrong, please try again." })
})


}).catch((err)=>{
    console.log(err);
    res.send({ success:false,message:'err db' })
})
}
