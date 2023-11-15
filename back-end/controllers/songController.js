const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");

//  VALIDATIONS
const {
  checkBoolean,
  checkName,
  checkArtist,
} = require("../validations/checkSongs");

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});
// SHOW
songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getSongById(id);
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: " does NOT exist" });
  }
});

// CREATE
songs.post("/", checkBoolean, checkName, checkArtist, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// UPDATE
songs.put("/:id", checkBoolean, checkName, checkArtist, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  if (updatedSong.id) {
    res.status(200).json(updatedSong);
  } else {
    res.status(404).json("Song not found");
  }
});

// DELETE
songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Doesn't Exist");
  }
});

module.exports = songs;
