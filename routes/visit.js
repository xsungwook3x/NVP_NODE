const client = require('../client');

const visit = async (req, res) => {
    const { name, phone, time, store_num, store_name,store_phone } = req.body;

    try {
      const visit = await client.visits.create({
        data: {
          name,
          phone,
          time,
          store_num,
          store_name,
          store_phone,
        },
      });
      
      res.status(200).send({
        ok: true,
        data: {
          visit,
        },
      });
    } catch (err) {
      res.status(409).send({
        ok: false,
        message: err.message,
      });
    }
  };
  
  module.exports = visit;