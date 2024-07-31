const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { signUpBody, signInBody, updateBody } = require("../types");

const { User, Account } = require("../db.js");

const { authMiddleware } = require("../Middleware.js");

router.post("/signup", async function (req, res) {
  const { success } = signUpBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken  / incorrect inputs.",
    });
  }

  const existingUser = await User.findOne({
    email: req.body.email,
  });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken.",
    });
  }
  const user = await User.create({
    email: req.body.email,
    Password: req.body.Password,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
  });

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000,
  });
  res.json({
    message: "user created succesfullly",
  });
});

router.post("/signin", async function (req, res) {
  const { success } = signInBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "incorrect inputs",
    });
  }

  const user = await User.findOne({
    email: req.body.email,
    Password: req.body.Password,
  });

  if (!user) {
    return res.status(403).json({
      message: "USER NOT FOUND",
    });
  } else {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET
    );
    return res.json({
      token: token,
    });
  }
});

module.exports = router;
