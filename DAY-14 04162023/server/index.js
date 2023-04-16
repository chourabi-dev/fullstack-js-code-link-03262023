const express = require('express')
const url = require('url');
const { getProductsList, addNewProduct, updateProduct, deleteProduct } = require('./modules/products');
const app = express()
const port = 8080
app.use(express.json());



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

// SIGNUP


// starting the server !!!!
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})