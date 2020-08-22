const Sequelize = require('sequelize');
const sequelize = new Sequelize ('gastos_control','root','navy1995',{
    host: "localhost",
    dialect:"mysql"
});

module.exports = { 
    index(req,res){     
        sequelize.query("SELECT nome,id,imgPerfil FROM user where email = 'jhonnyimmbe@gmail.com' and senha='123' ",{ type: sequelize.QueryTypes.SELECT})
        .then(function(users) {
        console.log(users);
        }).catch(function(error){
            console.log("Falha ao se conectar "+error);    
        }) 
      return res.send({"msg":"ok"});
    },

    create(req,res){
        
    }


}