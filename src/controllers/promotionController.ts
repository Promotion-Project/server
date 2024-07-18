import { Request, Response } from 'express';
import connection from '../config/database';
import { Promotion } from '../models/promotionModel';
import { ResultSetHeader } from 'mysql2';

export const getPromotions = (req: Request, res: Response) => {
  const { sort = 'name', order = 'asc', page = 1, limit = 10, search = '' } = req.query;

  const offset = (Number(page) - 1) * Number(limit);

  const query = `
    SELECT * FROM promotions
    WHERE name LIKE ? OR description LIKE ?
    ORDER BY ${sort} ${order === 'asc' ? 'ASC' : 'DESC'}
    LIMIT ? OFFSET ?
  `;

  connection.query(query, [`%${search}%`, `%${search}%`, Number(limit), offset], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

export const createPromotion = (req: Request, res: Response) => {
  const { name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers } = req.body;

  const query = `
    INSERT INTO promotions (name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query<ResultSetHeader>(query, [name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers });
  });
};

export const updatePromotion = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers } = req.body;

  const query = `
    UPDATE promotions
    SET name = ?, date = ?, sentGifts = ?, daysToTakeGift = ?, daysToReceiveGift = ?, description = ?, cardNumbers = ?
    WHERE id = ?
  `;

  connection.query(query, [name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, name, date, sentGifts, daysToTakeGift, daysToReceiveGift, description, cardNumbers });
  });
};

export const deletePromotion = (req: Request, res: Response) => {
  const { id } = req.params;

  const query = `
    DELETE FROM promotions
    WHERE id = ?
  `;

  connection.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id });
  });
};