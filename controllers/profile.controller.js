const User = require("../models/User");
const Trip = require("../models/Trip");

/* VIEW PROFILE */

exports.viewProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).lean();

    const preplannedTrips = await Trip.find({
      userId: user._id,
      status: { $in: ["upcoming", "ongoing"] },
    }).lean();

    const previousTrips = await Trip.find({
      userId: user._id,
      status: "completed",
    }).lean();

    res.render("profile/view", {
      user,
      preplannedTrips,
      previousTrips,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/dashboard");
  }
};

/* EDIT PROFILE */

exports.getEditProfile = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).lean();
    res.render("profile/edit", { user, error: null });
  } catch (err) {
    console.error(err);
    res.redirect("/profile");
  }
};

exports.postEditProfile = async (req, res) => {
  const { firstName, lastName, phone, city, country, additionalInfo } =
    req.body;

  try {
    const updateData = {
      firstName,
      lastName,
      phone,
      city,
      country,
      additionalInfo,
    };

    if (req.file) {
      updateData.profileImage = `/uploads/profile/${req.file.filename}`;
    }

    await User.findByIdAndUpdate(req.session.userId, updateData);

    res.redirect("/profile");
  } catch (err) {
    console.error(err);
    res.render("profile/edit", {
      user: req.body,
      error: "Failed to update profile",
    });
  }
};
