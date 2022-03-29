const router = require('express').Router();
const { Book, User, BookReview } = require('../models');
const withAuth = require('../utils/auth');
const multer = require('multer');


router.get('/', async (req, res) => {
  try {
    // Get all books and JOIN with user data
    const bookData = await Book.findAll({
      include: [
        {
          model: User,
          attributes: ['first_name', 'last_name', 'email', 'password'],
        },
      ],
    });

    // Serialize data so the template can read it
    const books = bookData.map((book) => book.get({ plain: true }));
   //console.log("home", books);
    // Pass serialized data and session flag into template
    res.render('homepage', {
      books,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/book/:id', withAuth, async (req, res) => {
  //get all book reviews and join with book and user data
 
  try {
    
    const bookreviewData = await BookReview.findAll({
     
      include: [
        {
          model: Book, 
          where: {id: req.params.id},
        },
        {
          model: User,
         // where: {id: BookReview.id},
         
        }
      ],
    });
    const bookreviews = bookreviewData.map((bookreview) => bookreview.get({ plain: true }));
    console.log("book reviews: ", (bookreviews));
    res.render('addreview', {
      ...bookreviews,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//code for multer image uploads

// const fileStorageEngine = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './public/uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "--" + file.originalname);
//   }
// })

// const upload = multer({ storage: fileStorageEngine })
// router.post("/review", upload.single("image"), (req, res) => {
//   console.log(req.file);
//   res.render('review');
// });


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/books', (req, res) => {
  if (req.session.logged_in) {
    res.render('book');
    return;
  }
});


router.get('/library', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Book }],
    });

    const user = userData.get({ plain: true });

    res.render('library', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cover/:id', (req, res) => {
  if (req.session.logged_in) {
    res.render('cover', {
      id: req.params.id
    });
    return;
  }
});

router.get('/cover', (req, res) => {
  if (req.session.logged_in) {
    res.render('cover');
    return;
  }
});

router.get('/review/:id', (req, res) => {
  if (req.session.logged_in) {
    res.render('review', {
    id: req.params.id
  });
    return
  }
});


// router.post('/single', (req, res) => {
//   if (req.session.logged_in) {
//     res.render('review');
//     return;
//   }
// });
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }



  res.render('login');
});

module.exports = router;
