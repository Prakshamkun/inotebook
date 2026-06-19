const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
router.post(
  '/',
  [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      let user = await User.findOne({
        email: req.body.email,
      });

      if (user) {
        return res.status(400).json({
          error: "Sorry, a user with this email already exists",
        });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, JWT_SECRET);

      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;

router.post(
  '/login',
  [
    body('email').isEmail(),
    body('password').exists(),
  ],
  async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {

      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          error: "Invalid Credentials"
        });
      }

      const passwordCompare = await bcrypt.compare(
        password,
        user.password
      );

      if (!passwordCompare) {
        return res.status(400).json({
          error: "Invalid Credentials"
        });
      }

      const data = {
        user: {
          id: user.id
        }
      };

      const authToken = jwt.sign(
        data,
        JWT_SECRET
      );

      res.json({ authToken });

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);