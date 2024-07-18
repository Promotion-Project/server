import { Router } from 'express';
import { getPromotions, createPromotion, updatePromotion, deletePromotion } from '../controllers/promotionController';

const router = Router();

router.get('/promotions', getPromotions);
router.post('/promotions', createPromotion);
router.put('/promotions/:id', updatePromotion);
router.delete('/promotions/:id', deletePromotion);

export default router;