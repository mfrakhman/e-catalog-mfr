const authMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    return res.status(401).json({ error: "unauthorized" });
  }
};

module.exports = authMiddleware;

// const jwt = require("jsonwebtoken");

// const cookieJwtAuth = (req, res, next) => {
//   const token = req.cookies.token;
//   try {
//     const user = jwt.verify(token, process.env.MY_SECRET);
//     req.user = user;
//     next();
//   } catch (err) {
//     res.clearCookie("token");
//     return res.redirect("/");
//   }
// };

// module.exports = cookieJwtAuth;
