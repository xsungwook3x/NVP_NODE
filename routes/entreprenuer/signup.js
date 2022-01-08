const bcrypt = require('bcryptjs');
const client = require('../../client');
const jwt = require('../../auth/auth-jwt');

const signup = async (req, res) => {
  const { id, name, password, store_num,store_name,store_phone, store_kind,store_address,filename } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const entreprenuer = await client.entreprenuers.create({
      data: {
        id, 
        name, 
        store_num,
        store_name,
        store_phone, 
        store_kind,
        store_address,
        filename, 
        password: hashedPassword,
      },
    });
    const token = jwt.sign(entreprenuer);

    res.status(200).send({
      ok: true,
      data: {
        token,
      },
    });
  } catch (err) {
    res.status(409).send({
      ok: false,
      message: err.message,
    });
  }
};

module.exports = signup;