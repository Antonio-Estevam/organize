const express = require('express');
const userController = require ('./controllers/userController');

const routs = express.Router();

/*routs.get('/',(req,res)=>{
    res.send("olá mundo");
});*/
routs.get('/user',userController.index);
routs.post('/user',userController.create);

module.exports = routs;