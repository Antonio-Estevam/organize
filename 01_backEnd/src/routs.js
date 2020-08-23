const express = require('express');
const userController = require ('./controllers/userController');
const debtsController = require ('./controllers/debtsController');

const routs = express.Router();

/*routs.get('/',(req,res)=>{
    res.send("olá mundo");
});*/
routs.get('/user',userController.index);
routs.post('/user',userController.create);

routs.get('/debts',debtsController.index);
routs.post('/debts',debtsController.create);

module.exports = routs;