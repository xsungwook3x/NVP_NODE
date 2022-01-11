const client = require('../../client');
const bcrypt = require('bcryptjs');
const seeProfile = async (req, res) => {
  const { id } = req;
  const entreprenuer = await client.entreprenuers.findFirst({
    where: {
      id,
    },
  });
  if (entreprenuer) {
    const { name, store_num,store_name,store_phone, store_kind,store_location,store_address,filename } = entreprenuer;
    res.status(200).send({
      ok: true,
      data: {
        name,
        store_num,
        store_name,
        store_phone,
        store_kind,
        store_location,
        store_address,
        filename,
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
  const { id, password } = req.body;
  let newPassword = null;
  if (password) {
    newPassword = await bcrypt.hash(password, 10);
  }

  const updatedEntreprenuer = await client.entreprenuers.update({
    where: {
      id,
    },
    data: {
      password: newPassword,
    },
  });

  if (updatedEntreprenuer.id) {
    
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