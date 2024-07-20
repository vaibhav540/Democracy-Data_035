// middlewares/checkAdminRole.js
const checkAdminRole = (req, res, next) => {
    if (req.user && req.user.roles.includes('admin')) {
      next();
    } else {
      res.status(403).json({ status: "failed", message: "Access denied. Admins only." });
    }
  };
  
  export default checkAdminRole;
  