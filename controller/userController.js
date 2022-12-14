const userModel = require("../models/userModel");

module.exports.getUser = async function (req, res) {
  try {
    let id = req.id;
    let user = await userModel.findById(id);
    res.json({ msg: "users retrieved", user });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

// module.exports.postUser = function (req, res) {
//   console.log(req.body.name);
//   //then i can put this in db
//   user.push(req.body);
//   res.json({
//     message: "Data received successfully",
//     user: req.body,
//   });
// };

module.exports.updateUser = async function (req, res) {
  console.log(req.body);
  let id = req.params.id;
  let user = await userModel.findById(id);
  let dataToBeupdated = req.body;
  // for(key in dataToBeupdated){
  //     user[key] = dataToBeupdated[key];
  // }
  try {
    if (user) {
      const keys = [];
      for (let key in dataToBeupdated) {
        keys.push(key);
      }

      for (let i = 0; i < keys.length; i++) {
        user[keys[i]] = dataToBeupdated[keys[i]];
      }

      const updatedData = await user.save();
      res.json({
        message: "Data updated successfully",
      });
    } else {
      res.json({
        message: "user not found",
      });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
};

module.exports.deleteUser = async function (req, res) {
  try {
    let id = req.params.id;
    let user = await userModel.findByIdAndDelete(id);
    res.json({
      msg: "User has been deleted",
      user,
    });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};

module.exports.allUser = async function (req, res) {
  try {
    let allUsers = await userModel.find();
    res.json({ msg: "user id is ", allUsers });
  } catch (err) {
    res.json({
      msg: err.message,
    });
  }
};
