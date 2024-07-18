import { Request, Response } from 'express';
import db from '../config/database';

export const getGifts = async (req: Request, res: Response) => {
  db.query('SELECT * FROM gifts', (error, results) => {
    if (error) {
      console.error('Error fetching gifts:', error);
      res.status(500).json({ message: 'Error fetching gifts' });
      return;
    }
    res.json(results);
  });
};
