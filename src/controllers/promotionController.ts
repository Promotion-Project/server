import { Request, Response } from 'express';
import connection from '../config/database';
import { Promotion } from '../types/promotion';

export const getPromotions = (req: Request, res: Response) => {
  connection.query('SELECT * FROM promotions', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
};

export const getPromotionById = (req: Request, res: Response) => {
  const id = req.params.id;
  connection.query('SELECT * FROM promotions WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results[0]);
    }
  });
};

export const createPromotion = (req: Request, res: Response) => {
  const newPromotion: Promotion = req.body;
  connection.query('INSERT INTO promotions SET ?', newPromotion, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json({ id: results.insertId, ...newPromotion });
    }
  });
};

export const updatePromotion = (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedPromotion: Promotion = req.body;
  connection.query('UPDATE promotions SET ? WHERE id = ?', [updatedPromotion, id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ id, ...updatedPromotion });
    }
  });
};

export const deletePromotion = (req: Request, res: Response) => {
  const id = req.params.id;
  connection.query('DELETE FROM promotions WHERE id = ?', [id], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: 'Promotion deleted successfully' });
    }
  });
};