var express = require('express');
var app = express();
const path = require('path');


app.get('/', indexHandler);
app.get('/about', aboutHandler);
app.get('/contact-me', contactHandler);
app.use(notFoundMiddleWare);
app.listen(8080, listenHandler);



/*
###### Handlers & middlewares ###### 
*/

function notFoundMiddleWare(req, res, next){
    res.status(404).sendFile(path.join(__dirname,'public', '404.html'));
}

function indexHandler(req, res){
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}

function aboutHandler(req, res){
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
}

function contactHandler(req, res){
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'));
}

function listenHandler(){
    console.log("Escuchando el puerto 8080!");
}