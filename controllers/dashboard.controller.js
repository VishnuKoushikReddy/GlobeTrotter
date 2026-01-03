const User = require('../models/User');
const Trip = require('../models/Trip');

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).lean();

    const trips = await Trip.find({ userId: user._id })
      .sort({ createdAt: -1 })
      .lean();

    res.render('dashboard/index', {
      user,
      trips
    });

  } catch (err) {
    console.error(err);
    res.redirect('/auth/login');
  }
};
