const url = require('url');


exports.somme = function(req,res){
    let somme = 0;


    const params = url.parse(req.url,true).query;


    console.log(params);


    somme = Number(params.x) + Number(params.y);


    // send response to user !! send()
    res.send(`la somme  = ${somme}`);
}



exports.minus = function(req,res){
    let result = 0;


    const params = url.parse(req.url,true).query; 

    result = Number(params.x) - Number(params.y);


    // send response to user !! send()
    res.send(`result  = ${result}`);
}