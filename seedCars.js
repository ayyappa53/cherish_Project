const mongoose = require("mongoose");
const { Car } = require("./models/Car"); // Adjust path as needed

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/yourDatabaseName", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedCars = async () => {
  try {
    await Car.deleteMany({}); // Clear existing data

    const cars = [
      {
        title: "Luxury SUV",
        description: "A comfortable and spacious SUV.",
        images: ["image1.jpg", "image2.jpg"],
        tags: ["SUV", "Luxury"],
        owner: "603d2149f4a8f92c0c99a8f5", // Use a valid ObjectId for testing
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
  } finally {
    mongoose.connection.close();
  }
};

seedCars();