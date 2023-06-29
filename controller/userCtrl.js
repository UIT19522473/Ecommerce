const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const createUser = async (req, res) => {
  const email = req.body.email;
  if (email) {
    const findUser = await User.findOne({ email: email });

    //if a account do not exist then create new account
    if (!findUser) {
      const user = req.body;
      // try create a account by user = req.body
      try {
        const newUser = await User.create(user);
        return res.status(200).json({ newUser, success: true });
      } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "Error from server" });
      }
    } else {
      return res.json({ msg: "User Already Exists", success: false });
    }
  } else {
    return res.json({ msg: "Email Empty", success: false });
  }
};

module.exports = { createUser };
