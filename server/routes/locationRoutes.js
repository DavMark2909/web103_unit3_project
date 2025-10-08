import express from 'express';

import locationController from '../controllers/locationController.js';

const locationRouter = express.Router();

router.get('/', locationController.getLocations);