const User = require(__dirname + '/../models/user');
const jwt = require('jsonwebtoken');

/*eslint-disable */
module.exports = exports = function(req, res, next) {
  jwt.verify(req.headers.token, process.env.APP_SECRET, function(err, decoded) {
    if (err) return res.status(403).json({ msg: 'could not authenticat' });

    User.findOne({ findHash: decoded.idd }, function(err, data) {
      if (err) return res.status(403).json({ msg: 'could not authenticat' });

      if (!data) return res.status(403).json({ msg: 'could not authenticat' });

      req.user = data;
      next();
    });
  });
};
/*eslint-enable */
