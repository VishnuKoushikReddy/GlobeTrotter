const express = require("express");
const router = express.Router();

const profileController = require("../../controllers/profile.controller");
const authMiddleware = require("../../middlewares/auth.middleware");
const upload = require("../../middlewares/upload.middleware");

// View profile
router.get("/profile", authMiddleware, profileController.viewProfile);

// Edit profile
router.get("/profile/edit", authMiddleware, profileController.getEditProfile);
router.post(
  "/profile/edit",
  authMiddleware,
  upload.single("profileImage"),
  profileController.postEditProfile
);

module.exports = router;
