const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { User, Admin, Course } = require("../db");
const router = Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('./../config.js')
// Admin Routes
router.post("/signup", async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    // check if a user with this username exists or not
  
    await Admin.create({
      // username: username,
      // password: password
      // if same name then we can use
      username,
      password,
    });
    res.json({
      message: "Admin created successfully",
    });
  });

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token
        })
    }
    else{
        res.json({
            msg: "Incorrect Credentials"
        })
    }

});

router.post("/courses", adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    // zod
    const newCourse = await Course.create({
      title,
      description,
      imageLink,
      price,
    });
    res.json({
      msg: "Course created succesdfully",
      courseId: newCourse._id,
    });
  });

  router.get("/courses", adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    //   Course.find({}).then(function (response) {
    //     res.json({
    //       courses: response,
    //     });
    //   });
    const response = await Course.find({});
    res.json({
      courses: response
    })
  });
module.exports = router;