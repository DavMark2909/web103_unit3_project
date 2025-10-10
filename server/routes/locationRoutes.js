import express from 'express';

import locationController from '../controllers/locationController.js';

const locationRouter = express.Router();

locationRouter.get('/', locationController.getLocations);

export default locationRouter;