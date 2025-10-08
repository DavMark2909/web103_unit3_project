import express from 'express';
import eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

router.get('/', eventController.getMusicEvents);
router.get('/location/:location', eventController.getMusicEventsByLocation);
router.get('/id/:id', eventController.getMusicEventsById);

export default eventRouter;