const client = require('../../client');

const remove = async(req,res) => {
    const id = req.body.data.id;

    try {
    
        const user = await client.users.findUnique({ // 해당 id를 가진 article이 있는지 확인
          where: {
            id,
          }
        });
    
        if(!user){ 
          const error = new Error('invalid id');
          error.status = 400;
          throw error;
        }
        
        const deletedUser = await client.users.deleteMany({ // 해당 id를 가진 article의 status를 DELETED로 변경
          where: { id }
        });
        res.status(200).json({deletedUser});

      } catch (error) {
        res.status(error.status).json({message : error.message});
      }
}

module.exports=remove;