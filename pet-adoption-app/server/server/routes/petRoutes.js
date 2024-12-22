const express = require("express");
const {
  createPet,
  getAllPets,
  upload,
} = require("../controllers/petController");
const router = express.Router();

router.post("/", upload.single("profilePicture"), createPet);
router.get("/", getAllPets);

module.exports = router;
