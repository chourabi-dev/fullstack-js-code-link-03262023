const express = require('express')
const url = require('url');
var jwt = require('jsonwebtoken');

var cors = require('cors')

const { getProductsList, addNewProduct, updateProduct, deleteProduct } = require('./modules/products');
const { createAccount, auth } = require('./modules/users');
const app = express()
const port = 8080
app.use(express.json());


 
app.use(cors());


// middleware !!
// we will use the middle ware to test if user is connected or not !!!


app.use(function(req,res,next){
    const token = req.headers.authorization;


    if ( req.path === '/api/auth/create-account' || req.path==='/api/auth/connect' ) {
        next();
    }else{
        try {
            var decoded = jwt.verify(token, 'secret-key-exmpl123');
            console.log(decoded) // bar
    
            next();
    
            
        } catch (error) {
            res.send({ success:false, message:'Session expired.' })
        }
     
    }


})








// product list  GET
app.get('/api/product/list',(req,res)=>{
    getProductsList(req,res);
})

// add product  POST
app.post('/api/product/add',(req,res)=>{
    addNewProduct(req,res);
})

// edit product POST
app.post('/api/product/update',(req,res)=>{
    updateProduct(req,res);
})

// delete product GET
app.get('/api/product/delete',(req,res)=>{
    deleteProduct(req,res);
})



// SIGNIN
app.post('/api/auth/connect',(req,res)=>{
    auth(req,res);
})



// SIGNUP
app.post('/api/auth/create-account',(req,res)=>{
    createAccount(req,res);
})




// starting the server !!!!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})