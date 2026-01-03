const Trip = require("../models/Trip");

/* CREATE */

exports.getCreateTrip = (req, res) => {
  res.render("trip/create", { error: null });
};

exports.postCreateTrip = async (req, res) => {
  const { title, place, startDate, endDate, description, status } = req.body;

  // Validation
  if (!title || !place || !startDate || !endDate || !status) {
    return res.render("trip/create", {
      error: "Please fill all required fields",
    });
  }

  // Date validation (recommended)
  if (new Date(startDate) > new Date(endDate)) {
    return res.render("trip/create", {
      error: "End date must be after start date",
    });
  }

  try {
    const trip = new Trip({
      userId: req.session.userId,
      title,
      place,
      startDate,
      endDate,
      description,
      status,
    });

    await trip.save();
    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.render("trip/create", {
      error: "Failed to create trip",
    });
  }
};

/* READ */

exports.viewTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      userId: req.session.userId,
    }).lean();

    if (!trip) return res.redirect("/dashboard");

    res.render("trip/view", { trip });
  } catch (err) {
    console.error(err);
    res.redirect("/dashboard");
  }
};

/* EDIT */

exports.getEditTrip = async (req, res) => {
  try {
    const trip = await Trip.findOne({
      _id: req.params.id,
      userId: req.session.userId,
    }).lean();

    if (!trip) return res.redirect("/dashboard");

    res.render("trip/edit", { trip, error: null });
  } catch (err) {
    console.error(err);
    res.redirect("/dashboard");
  }
};

exports.postEditTrip = async (req, res) => {
  const { title, place, startDate, endDate, description, status } = req.body;

  try {
    await Trip.findOneAndUpdate(
      { _id: req.params.id, userId: req.session.userId },
      { title, place, startDate, endDate, description, status }
    );

    res.redirect(`/trip/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.redirect("/dashboard");
  }
};

/* DELETE */

exports.deleteTrip = async (req, res) => {
  try {
    await Trip.findOneAndDelete({
      _id: req.params.id,
      userId: req.session.userId,
    });

    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.redirect("/dashboard");
  }
};
