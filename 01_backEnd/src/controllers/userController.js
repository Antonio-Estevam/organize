const connection = require('../models/connection');
const { json } = require('express');

module.exports = { 
   async index(req,res){          
                
        await connection.connect();
        
        await connection.query('SELECT * FROM gastos_control.user;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ');
        res.send(results[2])
        });
        
        
        await connection.end();
    },

    async create(req,res){ 
        console.log();

        await connection.connect();

        const dados = req.body;
        
        //{'Lucas', 'Silva', '1997-01-15', 'lucas.silva@tt.com', 'prty77', '1200', 'sdfghjklldui9euihfieuhfhfy'}; 

        await connection.query('INSERT INTO gastos_control.user SET ?',
        dados , function (error, results, fields) {
            if (error) throw error;
            console.log("cadastrado com sucesso!!");
          });
           
        await connection.end(); 

        res.send({"msg":"Cadastrado com sucesso"})
        
    }


}

//INSERT INTO `gastos_control`.`user` (`nome`, `sobre_nm`, `dt_nasc`, `email`, `senha`, `renda_mensal`, `imgPerfil`) VALUES ('Lucas', 'Silva', '1997-01-15', 'lucas.silva@tt.com', 'prty77', '1200', 'sdfghjklldui9euihfieuhfhfy');
