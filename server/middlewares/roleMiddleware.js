
const roleMiddleware = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Permission not given,bounce!" });
    }

    next();
  };
};

module.exports = roleMiddleware;
