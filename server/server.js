const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
// const bodyParser = require("body-parser");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const { GridFSBucket, ObjectId } = require("mongodb");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/auth");
const carRoutes = require("./routes/carRoutes");
const User = require("./Models/User");
const Car = require("./Models/Car");
const Mockup = require("./Models/Mockup");
const Reviews = require("./Models/Reviews");
const auth = require("./middlewares/authMiddleware");
const mongoose = require("mongoose");

const app = express();
//const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, // If you're using cookies or authentication
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));

//middleware provided by Express to parse incoming JSON requests.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

// connectDB();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const conn = mongoose.connection;

let gfs;

conn.once("open", () => {
  gfs = new GridFSBucket(conn.db, {
    bucketName: "uploads", // Specify your bucket name here
  });
  console.log("GridFs connected!");
});

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    return {
      filename: Date.now() + path.extname(file.originalname),
      bucketName: "uploads",
    };
  },
});

const upload = multer({ storage });

let PORT = process.env.PORT || 5000;

app.post("/insertreviews/:id", auth.authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { reviewPost, rating } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    //  Create user in MongoDB
    const newReview = new Reviews({
      reviewPost,
      rating,
      user: new mongoose.Types.ObjectId(req.user._id),
    });

    const savedReview = await newReview.save();

    await Car.findByIdAndUpdate(
      id,
      { $push: { reviews: savedReview._id } },
      { new: true }
    );

    res.status(201).json({
      message: "Review created and linked to car",
      review: savedReview,
    });

    //   if (car) {
    //     // The below two lines will add the newly saved review's
    //     // ObjectID to the the User's reviews array field
    //     car.reviews.push(new mongoose.Types.ObjectId(review._id));
    //     car.save();
    //     res.json({ message: 'Review created!' });
    // }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  //res.status(500).json({id:id,body:[reviewPost,rating]})
});


app.post(
  "/insertcars",
  upload.fields([
    { name: "displayImage", maxCount: 1 },
    { name: "multipleImages", maxCount: 3 },
  ]),async (req, res) => {

    try{                                                                                 
      const newCar = new Car({
        carName:req.body.carName,
        carType:req.body.carType,
        carDescription :req.body.carDescription,
        displayImage:req.files.displayImage[0].filename,
        multipleImages: req.files.multipleImages.map(item=>item.filename),
        numberOfSeats:req.body.numberOfSeats,
        carSteering:req.body.carSteering,
        gasolineCapacity:req.body.gasolineCapacity,
        recentPrice:req.body.recentPrice,
        oldPrice:req.body.oldPrice,
        rented:req.body.rented,
      })
  
      const savedNewCar = await newCar.save();
  
      res.send({
        message: "Data uploaded successfully",
        savedNewCar
      });

    }catch(error){
      res.status(500).json({ error: error.message });
    }
   
  }
);



app.post(
  "/mockup",
  upload.fields([
    { name: "displayImage", maxCount: 1 },
    { name: "multipleImages", maxCount: 2 },
  ]),
  async (req, res) => {
    // res.send({
    //   message: "Data uploaded successfully",
    //   textData: req.body,
    //   files: req.files,
    // });

     //  Create user in MongoDB
     const newMockup = new Mockup({
      firstName:req.body.name,
      displayImage:req.files.displayImage[0].filename,
      multipleImages: req.files.multipleImages.map(item=>item.filename)
    })

    const savedMockup = await newMockup.save();

    res.status(201).json({
      message: "Review created and linked to car",
      mockup: savedMockup,
    });



  }
);

app.get("/mockup", async (req, res) => {
  try {
    const files = await gfs.find({}).toArray();
    res.status(201).json({
      files
    });
  } catch (err) {
    console.error('Error retrieving files from GridFS:', err);
    throw err;
  } 
});

app.get("/getImages/:fileId", async (req, res) => {
  try {
    const file = req.params.fileId;
    const downloadStream = gfs.openDownloadStreamByName(file);
    // Assuming fileId is the ID of the audio file in GridFS
    downloadStream.pipe(res);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/get_cars", carRoutes);
app.use("/", userRoutes);
// app.use('/users', userRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//
