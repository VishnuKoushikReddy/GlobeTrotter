const express = require("express");
const router = express.Router();

const tripController = require("../../controllers/trip.controller");
const authMiddleware = require("../../middlewares/auth.middleware");

// Create
router.get("/trip/create", authMiddleware, tripController.getCreateTrip);
router.post("/trip/create", authMiddleware, tripController.postCreateTrip);

// Read
router.get("/trip/:id", authMiddleware, tripController.viewTrip);

// Edit
router.get("/trip/:id/edit", authMiddleware, tripController.getEditTrip);
router.post("/trip/:id/edit", authMiddleware, tripController.postEditTrip);

// Delete
router.post("/trip/:id/delete", authMiddleware, tripController.deleteTrip);

module.exports = router;
