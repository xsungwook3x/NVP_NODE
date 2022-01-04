const jwt = require('jsonwebtoken');
const { redisClient } = require('../utils/redis');
const { promisify } = require('util');
const secret = "ef60a197b3bf501e6231e4476fd5b782d7d306436ec5ecf25cb63e06a400a8fad07d637eb89bffea10925df2ea56c619fbd3e07aa9d88f1f26eb28692b69a871";

module.exports = {
  sign: (user) => {
    const payload = {
        id: user.id,
        name: user.name,
        filename: user.filename
    };

    return jwt.sign(payload, secret, {
      algorithm: 'HS256',
      expiresIn: '1d',
      issuer: 'issuer',
    });
  },
  verify: (token) => {
    let decoded = null;
    try {
      decoded = jwt.verify(token, secret);
      return {
        ok: true,
        id: decoded.id,
        name: decoded.name,
        filename: decoded.filename
      };
    } catch (err) {
      return {
        ok: false,
        message: err.message,
      };
    }
  },
  refresh: () => {
    return jwt.sign({}, secret, {
      algorithm: 'HS256',
      expiresIn: '14d',
      issuer: 'kshired',
    });
  },
  refreshVerify: async (token, username) => {
    const getAsync = promisify(redisClient.get).bind(redisClient);
    try {
      const data = await getAsync(username);
      if (token === data) {
        return {
          ok: true,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (err) {
      return {
        ok: false,
      };
    }
  },
};