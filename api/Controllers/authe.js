import user from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';
export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newuser = new user({
     ...req.body,
         password: hash,
    });

    await newuser.save();
    res.status(200).send("user has been created");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const User = await user.findOne({ username: req.body.username });
    if (!User) return next(createError(404, "user not found"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      User.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "password not correct"));

    const token = jwt.sign(
      { id: User._id, isAdmin: User.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = User._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({details:{...otherDetails},isAdmin});
  } catch (err) {
    next(err);
  }
};



