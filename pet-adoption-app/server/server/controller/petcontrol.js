const Pet = require("../models/Pet");
const multer = require("multer");
const path = require("path");

// Set up multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/pet_images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const createPet = async (req, res) => {
  const { name, type, age, breed, description, ownerId } = req.body;
  const profilePicture = req.file ? req.file.filename : null;

  try {
    const newPet = new Pet({
      name,
      type,
      age,
      breed,
      description,
      profilePicture,
      owner: ownerId,
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPet, getAllPets, upload };
