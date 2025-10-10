import express from 'express';
import eventController from '../controllers/eventController.js';

const eventRouter = express.Router();

eventRouter.get('/', eventController.getMusicEvents);
eventRouter.get('/location/:location', eventController.getMusicEventsByLocation);
eventRouter.get('/id/:id', eventController.getMusicEventsById);
eventRouter.get('/allLocation', eventController.getLocations);

export default eventRouter; 