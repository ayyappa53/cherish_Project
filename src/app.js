const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/user.routes.js");
const { Car } = require('./models/car.model.js'); // Corrected import
dotenv.config();

const app = express();
app.use(express.json());

// Auth routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

// Seed function to add cars (only run this when needed)
const seedCars = async () => {
  try {
    await Car.deleteMany(); // Clear existing data
    const cars = [
      {
        title: "Luxury SUV",
        description: "A comfortable and spacious SUV.",
        images: ["image1.jpg", "image2.jpg"],
        tags: ["SUV", "Luxury"],
        owner: "603d2149f4a8f92c0c99a8f5", // Replace with valid ObjectIds
      },
      {
        title: "Electric Sedan",
        description: "A high-performance electric vehicle.",
        images: ["image3.jpg", "image4.jpg"],
        tags: ["Electric", "Sedan"],
        owner: "603d2149f4a8f92c0c99a8f6",
      },
      {
        title: "Compact SUV",
        description: "Perfect for city driving.",
        images: ["image5.jpg", "image6.jpg"],
        tags: ["SUV", "Compact"],
        owner: "603d2149f4a8f92c0c99a8f7",
      },
      {
        title: "Vintage Classic",
        description: "An antique car for vintage lovers.",
        images: ["image7.jpg", "image8.jpg"],
        tags: ["Vintage", "Classic"],
        owner: "603d2149f4a8f92c0c99a8f8",
      },
    ];

    await Car.insertMany(cars);
    console.log("Dummy car data added successfully!");
  } catch (error) {
    console.error("Error adding dummy car data:", error);
  }
};

// Call connectDB function to connect to MongoDB and start the server
connectDB().then(() => {
  // Only uncomment the next line when you want to seed the database
  // seedCars();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
