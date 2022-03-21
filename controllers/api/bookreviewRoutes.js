const router = require('express').Router();
const { BookReview } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBookReview = await BookReview.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBookReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookReviewData = await BookReview.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookReviewData) {
      res.status(404).json({ message: 'No book review found with this id!' });
      return;
    }

    res.status(200).json(bookReviewData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;