const bcrypt = require('bcryptjs');
const client = require('../../client');
const jwt = require('../../auth/auth-jwt');
const { redisClient } = require('../../utils/redis');

const login = async (req, res) => {
  const { id, password } = req.body;
  // to do : check id, password are not undefined
  // if undefined return 400
  const user = await client.users.findFirst({
    where: {
      id,
    },
  });

  if (user) {
    const chk = await bcrypt.compare(password, user.password);
    if (chk) {
      const accessToken = jwt.sign(user);
      const refreshToken = jwt.refresh();

      redisClient.on('error', (err) => console.log('Redis Client Error', err));

      //await redisClient.connect();
      redisClient.set(id, refreshToken);

      res.status(200).send({
        ok: true,
        data: {
          accessToken,
          refreshToken,
        },
      });

      //await redisClient.disconnect();
      return;
    } else {
      res.status(401).send({
        ok: false,
        message: 'password is incorrect',
      });
      return;
    }
  }
  res.status(401).send({
    ok: false,
    message: 'user not exist',
  });
};

module.exports = login;