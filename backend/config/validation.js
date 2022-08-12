const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const genrateUserToken = (email, id, role) => {
  const token = jwt.sign(
    {
      email,
      user_id: id,
      role,
    },
    "gjhgjhg898hvh7by7y7bgybgybybygbfdf",
    { expiresIn: "2d" }
  );
  return token;
};

const verifyToken = (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    var responseErr = {
      status: 401,
      message: "Token not provided",
    };
    return res.status(401).send(responseErr);
  }
  try {
    const decoded = jwt.verify(token, gjhgjhg898hvh7by7y7bgybgybybygbfdf);
    if (decoded) {
      if (decoded.type === "logged") {
        req["user_id"] = decoded.user_id;
        req["email"] = decoded.email;
        req["role"] = decoded.role;
        next();
      } else {
        req.user = {
          email: decoded.email,
          user_id: decoded.user_id,
          role: decoded.role,
        };
        next();
      }
    }
  } catch (error) {
    const responseErr = {
      status: 400,
      message: "Authentication Failed",
    };
    return res.status(400).send(responseErr);
  }
};

const hashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  //new we set user password to hashed password
  const data = bcrypt.hashSync(password, salt);
  return data;
};

const comparePassword = (hashPassword, password) => {
  const data = bcrypt.compareSync(password, hashPassword);
  return data;
};

const resetPasswordToken = () => {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() * 10 * 60 * 1000;
  return resetToken;
};

module.exports = {
  genrateUserToken,
  verifyToken,
  hashPassword,
  comparePassword,
  resetPasswordToken,
};
