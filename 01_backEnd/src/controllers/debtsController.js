const connection = require('../models/connection');

module.exports = { 
   async index(req,res){          
                
        await connection.connect();
        
        await connection.query('SELECT * FROM gastos_control.contas;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ');
        res.send(results)
        });
        
        
        await connection.end();
    },

    async create(req,res){ 
        console.log();

        await connection.connect();

        const dados = req.body;

        await connection.query('INSERT INTO gastos_control.contas SET ?',
        dados , function (error, results, fields) {
            if (error) throw error;
            console.log("cadastrado com sucesso!!");
          });
           
        await connection.end(); 

        res.send({"msq":"cadastrado com sucesso"});
        
    }


}

