const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const Project = require("./models/Project");

dotenv.config();

connectDB();

const projects = [
  {
    title: "House Price Predictor",
    description:
      "Machine learning project for predicting house prices based on various features.",
    tech: "Python, Machine Learning",
    github: "https://github.com/Soumyaaa09",
    image: "project2.jpg",
  },

  {
    title: "Vehicle Renting Portal",
    description:
      "Cloud-based vehicle renting management platform with booking features.",
    tech: "AWS, React.js",
    github: "https://github.com/Soumyaaa09",
    image: "project3.jpg",
  },
];

const importData = async () => {
  try {
    await Project.deleteMany();

    await Project.insertMany(projects);

    console.log("Projects Added");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

importData();