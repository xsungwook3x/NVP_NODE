const client = require('../../client');
const bcrypt = require('bcryptjs');
const seeProfile = async (req, res) => {
  const { id } = req.body;
  const user = await client.users.findFirst({
    where: {
      id,
    },
  });
  if (user) {
    const { name, phone, filename, filedate } = user;
    res.status(200).send({
      ok: true,
      data: {
        name,
        phone,
        filename,
        filedate,
      },
    });
    return;
  }
  res.status(401).send({
    ok: false,
    message: 'user not exist',
  });
};

const modifyProfile = async (req, res) => {
  const {id, password } = req.body;
  let newPassword = null;
  if (password) {
    newPassword = await bcrypt.hash(password, 10);
  }

  const updatedUser = await client.users.update({
    where: {
      id,
    },
    data: {
      password: newPassword,
    },
  });

  if (updatedUser.id) {
    
    res.status(200).send({
      ok: true
    });
  } else {
    res.status(401).send({
      ok: false,
      error: 'Could not update profile',
    });
  }
};

module.exports = {
  seeProfile,
  modifyProfile,
};