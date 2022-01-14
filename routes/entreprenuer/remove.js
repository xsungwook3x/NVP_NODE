const client = require('../../client');

const remove = async(req,res) => {
    const id = req.body.id;

    try {
        const entreprenuer = await client.entreprenuers.findUnique({ // 해당 id를 가진 article이 있는지 확인
          where: {
            id,
          }
        });
    
        if(!entreprenuer){ 
          const error = new Error('invalid id');
          error.status = 400;
          throw error;
        }
        
        const deletedEntreprenuer = await client.entreprenuers.deleteMany({ // 해당 id를 가진 article의 status를 DELETED로 변경
          where: { id }
        });
        res.status(200).json({deletedEntreprenuer});

      } catch (error) {
        res.status(error.status).json({message : error.message});
      }
}

module.exports=remove;