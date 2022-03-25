//code for multer image uploads
const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "--" + file.originalname);
    }
  })
  
  const upload = multer({ storage: fileStorageEngine })
  
  app.post("/single", upload.single("image"), (req, res) => {
    console.log(req.file);
    res.render('review');
  });