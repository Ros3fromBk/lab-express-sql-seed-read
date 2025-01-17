const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};
// SHOW
const getSongById = async (id) => {
  try {
    const songById = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return songById;
  } catch (error) {
    return error;
  }
};

// CREATE
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [song.name, song.artist, song.album, song.is_favorite]
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updateSong = async (id, song) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, is_favorite=$4 WHERE id=$5 RETURNING *",
      [song.name, song.artist, song.album, song.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
};
