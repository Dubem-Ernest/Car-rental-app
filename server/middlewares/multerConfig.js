const multer = require('multer');

const storage = multer.memoryStorage();
 const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  }, // 10mb limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  },
});

module.exports = upload
