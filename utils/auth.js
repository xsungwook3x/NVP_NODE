const { verify } = require('../auth/auth-jwt');

const authJWT = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split('Bearer ')[1];
    const result = verify(token);
    if (result.ok) {
      req.id = result.id;
      req.name = result.name;
      req.password=result.password;
      req.filename=result.filename;
      req.filedate=result.filedate;
      next();
    } else {
      res.status(401).send({
        ok: false,
        message: result.message,
      });
    }
  }
};

module.exports = authJWT;