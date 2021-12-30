const bcrypt = require('bcrypt');
const client = require('../../client');
const jwt = require('../../auth/auth-jwt');

const signUp = async (req, res) => {
  const { id, name, password, filename, filedate,phone } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await client.users.create({
      data: {
        id,
        name,
        phone,
        filedate,
        filename,
        password: hashedPassword,
      },
    });
    const token = jwt.sign(user);

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

module.exports = signUp;