const client = require('../../client');
const bcrypt = require('bcryptjs');

const findId = async (req,res) => {
    const {store_num, name, phone}=req.body;

    const entreprenuer = await client.entreprenuers.findFirst({
        where: { store_num }
      });

    if(entreprenuer){
        
        if(entreprenuer.name===name && entreprenuer.phone===phone){
            const id=entreprenuer.id;
            res.status(200).send({
                ok: true,
                data: {
                  id
                },
              });

            return;
        }else{
            res.status(401).send({
                ok: false,
                message: 'name or phone is uncorrect',
              });
              return;
        }
    }else{
        res.status(402).send({
            ok: false,
            message: 'user not exist',
          });
        return;
    }
};

const findPassword = async (req,res) => {
    const {id,name,store_num}=req.body;

    const entreprenuer = await client.entreprenuers.findFirst({
        where: { id }
    });

    if(entreprenuer){
        
        if(entreprenuer.name===name && entreprenuer.store_num===store_num){

            res.status(200).send({
                ok: true,
                message: 'user exist'   
                
              });

            return;
        }else{
            res.status(401).send({
                ok: false,
                message: 'name or store_num is uncorrect',
              });
              return;
        }
    }else{
        res.status(402).send({
            ok: false,
            message: 'user not exist',
          });
        return;
    }
    
    
}

module.exports = {
    findId,
    findPassword
}