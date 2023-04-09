const express = require('express')
const url = require('url');
const { somme, minus } = require('./modules/calculator');

const app = express()
const port = 8080

// indicate to the serevr that we are using JSON !!!! 
app.use(express.json());



// we need to develop an API
// GET => somme x et y

/**
 * app.get("/somme",(req,res)=>{
    somme(req,res);
})


app.get("/minus",(req,res)=>{
    minus(req,res);
})
 */

/*
app.get("/demo",(req,res)=>{
    
    //number
    // 200 OK
    // 40* security 
    // 50* fatal error !!!

    // status + body
    //res.status(500).send("error server");

    // object
   //  res.send( { firstname:"demo", lastname:"employee" } ) 

   // arrays of objs
   // res.send( [  { firstname:"demo", lastname:"employee" }, { firstname:"demo", lastname:"employee" }, { firstname:"demo", lastname:"employee" } ] )
})*/




///*********************** POST *********************** */

app.post("/add-employee",(req,res)=>{

    console.log(req.body);

    const employee = {
        fullname: req.body.fullname,
        email: req.body.email,
        
    }


    // CONNECT TO DB

    // INSERT 

    // OK !!!
    res.send( { success:true } )
})




// starting the server !!!!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})