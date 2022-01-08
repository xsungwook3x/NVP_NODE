const bcrypt = require('bcryptjs');
const client = require('../../client');

const check = async (req, res) => {
  const { id } = req.body;
  // to do : check id, password are not undefined
  // if undefined return 400
  const entreprenuer = await client.entreprenuers.findFirst({
    where: {
      id,
    },
  });

  if (!entreprenuer) {
    
    res.status(200).send({
       ok: true
     
    });

      //await redisClient.disconnect();
      return;
    
  }else{
  res.status(401).send({
    ok: false,
    message: 'user exist',});
    return;
    }
}

module.exports = check;