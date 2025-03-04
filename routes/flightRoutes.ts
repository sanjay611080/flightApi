import { Router } from 'express';
import { getRoutes, getPassengerDetails } from '../controllers/flightController';

const router = Router();

router.get('/routes', getRoutes);
router.get('/passengers', getPassengerDetails);

export default router;
