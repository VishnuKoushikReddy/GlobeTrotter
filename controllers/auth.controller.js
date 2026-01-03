const User = require('../models/User');
const bcrypt = require('bcrypt');

// Login Code 

exports.getLogin = (req, res) => {
  res.render('auth/login', { error: null });
};

exports.postLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.render('auth/login', { error: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.render('auth/login', { error: 'Invalid credentials' });
  }

  req.session.userId = user._id;
  res.redirect('/dashboard');
};


// Register Page Code

exports.getRegister = (req, res) => {
  res.render('auth/register', { error: null });
};

exports.postRegister = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    city,
    country,
    additionalInfo,
    password
  } = req.body;

  try {
    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('auth/register', {
        error: 'Email already registered'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      city,
      country,
      additionalInfo,
      password: hashedPassword
    });

    await user.save();

    // Redirect to login
    res.redirect('/login');

  } catch (err) {
    console.error(err);
    res.render('auth/register', {
      error: 'Registration failed'
    });
  }
};