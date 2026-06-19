const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');

// Fetch All Notes
router.get(
  '/fetchallnotes',
  fetchuser,
  async (req, res) => {

    try {

      const notes = await Note.find({
  user: req.user.id
});

      res.json(notes);

    } catch (error) {

      console.error(error.message);

      res.status(500).send(
        "Internal Server Error"
      );
    }
  }
);

// Update Note
router.get(
  '/fetchallnotes',
  async (req, res) => {

    const {
      title,
      description,
      tag
    } = req.body;

    try {

      const newNote = {};

      if (title) {
        newNote.title = title;
      }

      if (description) {
        newNote.description = description;
      }

      if (tag) {
        newNote.tag = tag;
      }

      let note = await Note.findById(
        req.params.id
      );

      if (!note) {

        return res
          .status(404)
          .send("Not Found");
      }

      note =
        await Note.findByIdAndUpdate(
          req.params.id,
          { $set: newNote },
          { new: true }
        );

      res.json({ note });

    } catch (error) {

      console.error(error.message);

      res.status(500).send(
        "Internal Server Error"
      );
    }
  }
);

module.exports = router;