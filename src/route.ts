import express from 'express';
import { getAllAlbums, getAllSongs, getAllSongsFromAlbum, getSingleSong } from './controller.js';

const router = express.Router();

router.get("/album/all", getAllAlbums);
router.get("/song/all", getAllSongs);
router.get("/album/:id", getAllSongsFromAlbum);
router.get("/song/:id", getSingleSong);

export default router;