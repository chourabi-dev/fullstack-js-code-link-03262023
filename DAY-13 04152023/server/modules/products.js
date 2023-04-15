const { ObjectId }  = require('mongodb');
const url = require('url');


exports.getProductsList = function(req,res){

    // 1 connect to db
    const client = require('mongodb').MongoClient;

    client.connect('mongodb://localhost:27017').then((server)=>{

    const db = server.db("ttc-demo-fullstack-js");


    db.collection("products").find().toArray().then((documents)=>{
        res.send(documents);

    }).catch((err)=>{
        res.send({ success:false,message:'err db' })
    })




    }).catch((err)=>{
        res.send({ success:false,message:'err db' })
    })

    
}





exports.addNewProduct = function(req,res){

    // 1 connect to db
    const client = require('mongodb').MongoClient;

    client.connect('mongodb://localhost:27017').then((server)=>{

    const db = server.db("ttc-demo-fullstack-js");


    const body = req.body;

    console.log(body);

    const document = {
        product: body.name,
        price:body.price,
        quantity:body.quantity,
        code:body.code,
        createdAt: new Date()
    }

    db.collection("products").insertOne(document).then(()=>{
        res.send({ success:true, message:'Product inserted successfully.' })
    }).catch(()=>{
        res.send({ success:false, message:"Something went wrong, please try again." })
    })
 

    }).catch((err)=>{
        res.send({ success:false,message:'err db' })
    })

    
}







exports.updateProduct = function(req,res){

    // 1 connect to db
    const client = require('mongodb').MongoClient;

    client.connect('mongodb://localhost:27017').then((server)=>{

    const db = server.db("ttc-demo-fullstack-js");


    const body = req.body;

    console.log(body);

    const document = {
        product: body.name,
        price:body.price,
        quantity:body.quantity,
        code:body.code,
        createdAt: new Date()
    }

    db.collection("products").updateOne(
        { _id:  new ObjectId(body.id)  }, // search !!!,
        { $set: {  product: body.name,
                   price:body.price,
                   quantity:body.quantity,
                   code:body.code, } }

    ).then(()=>{
        res.send({ success:true, message:'Product updated successfully.' })
    }).catch(()=>{
        res.send({ success:false, message:"Something went wrong, please try again." })
    })
 

    }).catch((err)=>{
        console.log(err);
        res.send({ success:false,message:'err db' })
    })

    
}




exports.deleteProduct = function(req,res){

    const params = url.parse(req.url,true).query;



    // 1 connect to db
    const client = require('mongodb').MongoClient;

    client.connect('mongodb://localhost:27017').then((server)=>{

    const db = server.db("ttc-demo-fullstack-js");


    db.collection("products").deleteOne( { _id: new ObjectId( params.id ) } ).then(()=>{
        res.send({ success:true, message:'Product deleted successfully.' })
    }).catch(()=>{
        res.send({ success:false, message:"Something went wrong, please try again." })
    })
 

    }).catch((err)=>{
        console.log(err);
        res.send({ success:false,message:'err db' })
    })

    
}

