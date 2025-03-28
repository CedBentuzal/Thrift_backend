const express = require('express');
const router = express.Router();
const { loginUser } = require('../services/authService');

// login route
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await loginUser(email, password);
    if (response.token){ 
      res.status(200).json(response);
    }else{
      res.status(400).json(response);
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;