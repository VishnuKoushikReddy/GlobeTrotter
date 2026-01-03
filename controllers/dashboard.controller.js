const User = require("../models/User");
const Trip = require("../models/Trip");

exports.getDashboard = async (req, res) => {
  try {
    const user = await User.findById(req.session.userId).lean();

    const { search, sort, status } = req.query;

    // Base query (user scoped)
    let query = { userId: user._id };

    // Search by title or place
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { place: { $regex: search, $options: "i" } },
      ];
    }

    // Status filter
    if (status && ["upcoming", "ongoing", "completed"].includes(status)) {
      query.status = status;
    }

    // Sorting
    let sortOption = { createdAt: -1 }; // default

    if (sort === "startDate") {
      sortOption = { startDate: 1 };
    } else if (sort === "createdDate") {
      sortOption = { createdAt: -1 };
    }

    const trips = await Trip.find(query).sort(sortOption).lean();

    res.render("dashboard/index", {
      user,
      trips,
      search,
      sort,
      status,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/auth/login");
  }
};
