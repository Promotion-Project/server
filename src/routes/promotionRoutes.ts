import { Router } from 'express';
import {
  getPromotions,
  getPromotionById,
  createPromotion,
  updatePromotion,
  deletePromotion
} from '../controllers/promotionController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Promotion:
 *       type: object
 *       required:
 *         - name
 *         - date
 *         - sentGifts
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated ID of the promotion
 *         name:
 *           type: string
 *           description: The name of the promotion
 *         date:
 *           type: string
 *           format: date
 *           description: The date of the promotion
 *         sentGifts:
 *           type: integer
 *           description: The number of sent gifts
 *         description:
 *           type: string
 *           description: The description of the promotion
 *         cardNumbers:
 *           type: string
 *           description: The card numbers associated with the promotion
 *       example:
 *         id: 1
 *         name: Summer Promotion
 *         date: 2024-07-11
 *         sentGifts: 100
 *         description: This is a summer promotion.
 *         cardNumbers: 123456789,987654321
 */

/**
 * @swagger
 * tags:
 *   name: Promotions
 *   description: The promotions managing API
 */

/**
 * @swagger
 * /api/promotions:
 *   get:
 *     summary: Returns the list of all the promotions
 *     tags: [Promotions]
 *     responses:
 *       200:
 *         description: The list of the promotions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Promotion'
 */
router.get('/', getPromotions);

/**
 * @swagger
 * /api/promotions/{id}:
 *   get:
 *     summary: Get a promotion by id
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The promotion id
 *     responses:
 *       200:
 *         description: The promotion description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 *       404:
 *         description: The promotion was not found
 */
router.get('/:id', getPromotionById);

/**
 * @swagger
 * /api/promotions:
 *   post:
 *     summary: Create a new promotion
 *     tags: [Promotions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       201:
 *         description: The promotion was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 *       500:
 *         description: Some server error
 */
router.post('/', createPromotion);

/**
 * @swagger
 * /api/promotions/{id}:
 *   put:
 *     summary: Update a promotion by id
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The promotion id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Promotion'
 *     responses:
 *       200:
 *         description: The promotion was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Promotion'
 *       404:
 *         description: The promotion was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', updatePromotion);

/**
 * @swagger
 * /api/promotions/{id}:
 *   delete:
 *     summary: Remove the promotion by id
 *     tags: [Promotions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The promotion id
 *     responses:
 *       200:
 *         description: The promotion was deleted
 *       404:
 *         description: The promotion was not found
 */
router.delete('/:id', deletePromotion);

export default router;