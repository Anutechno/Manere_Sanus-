const { constants } = require("crypto");
const Users = require("../models/User");

exports.Usersignup = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (email === "" || password === "") {
    var response = {
      status: 201,
      message: "email and password not be empty",
    };
    return res.status(201).send(response);
  }
  let data = await Users.findOne(email ? { email } : { username });
  if (data) {
    var response = {
      status: 400,
      message: "user already exist",
    };
    return res.status(400).send(response);
  }
  const user = await Users(req.body);
  await user.save();
  var response = {
    status: 200,
    message: "user sigup Succesfully",
  };
  return res.status(200).send(response);
};

exports.Usersignin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    var response = {
      status: 400,
      message: "please enter email password",
    };
    return res.status(400).send(response);
  }
  const user = await Users.findOne({ email: email }).select("+password");
  console.log(user);
  if (!user) {
    var response = {
      status: 401,
      message: "Envalid email password",
    };
    return res.status(401).send(response);
  } else {
    var response = {
      status: 200,
      message: "user signin successfull",
    };
    return res.status(200).send(response);
  }
};

exports.logoutUser = async (req, res) => {
  try {
    const { email } = req.body;
    const Userdata = await Users.findOne({ email: email });
    console.log("info", Userdata);
    res
      .status(200)
      .clearCookie("token", null)
      .json({ data: Userdata, mesaage: "user logout seccessfully" });
  } catch (err) {
    res.status(400).json({ data: err, mesaage: "Error" });
  }
};
exports.getoneUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email });
  console.log(user);
  if(!user){
    var response = {
        status: 400,
        message: "user not found",
      };
      return res.status(400).send(response);
  }
   var response = {
      status: 200,
      message: "user find successfull",
    };
    return res.status(200).send(response);

}
exports.getallUser = async (req, res) => {
    const { email, password } = req.body;
  const user = await Users.find();
  console.log(user);
  if(!user){
    var response = {
        status: 400,
        message: "user not found",
      };
      return res.status(400).send(response);
  }
   var response = {
      status: 200,
      message: "user find successfull",
    };
    return res.status(200).send(response);
}
