const router = require('express').Router();
const { Book } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log("newBook", newBook.dataValues.id);
    res.status(200).json({"newbook": newBook});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBook = await Book.update(req.body, {
      where: {
        id: req.params.id,
      },
    }
    );

    if (!updateBook) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json({"updateBook": updateBook});
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
