const Car = require("../Models/Car");
const mongoose = require('mongoose');



exports.getAllCars = async (req, res) => {
  try {
    const allCars = await Car.find({}).sort({ date: 1 });;
    res.status(200).json(allCars);
   
  } catch (error) {
    console.error("Error fetching documents:",error)   
    res.status(500).json({error:"Internal Server Error"})
  }
}



exports.getOneCar= async (req, res, next) => {
    const id = req.params.id
   
    try {
       if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({error:"Invalid ID format"})
       }

       const objectId = new mongoose.Types.ObjectId(id)
      const car = await Car.findById(objectId);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
      res.json(car); // Send the single document
    } catch (err) {
      next(err);
    }
  };


  // exports.createCar= async (req, res, next) => {
  //   try {
  //     if (!req.files.singleImage || req.files.singleImage.length === 0) {
  //       return res.status(404).json({ message: 'An image is required !' });
  //     }
  //     const newCar = new Car({
  //       carName: req.body.carName,
  //       carType:req.body.carType,
  //       displayImage: {
  //         data: req.files.singleImage[0].buffer,
  //         contentType: req.files.singleImage[0].mimetype,
  //       },
  //       multipleImages: req.files.multipleImages ? req.files.multipleImages.map(file =>({
  //           data:file.buffer,
  //           contentType: file.mimetype
  //       })) : [],
  //       numberOfSeats: req.body.numberOfSeats,
  //       carSteering: req.body.carSteering ,
  //       gasolineCapacity: req.body.gasolineCapacity ,
  //       recentPrice: req.body.recentPrice,
  //       oldPrice: req.body.oldPrice,
  //       position: {
  //         lat: {
  //           type: String,
  //         },
  //         long: {
  //           type: String,
  //         },
  //       },
  //     })
  //   } catch (err) {
  //     next(err);
  //   }
  // };




