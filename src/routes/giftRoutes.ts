import { Router } from 'express';
import { getGifts } from '../controllers/giftController';

const router = Router();

router.get('/gifts', getGifts);

export default router;