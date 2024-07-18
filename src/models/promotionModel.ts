import { RowDataPacket } from 'mysql2';

export interface Promotion extends RowDataPacket {
  id: number;
  name: string;
  date: string;
  sentGifts: number;
  daysToTakeGift: number;
  daysToReceiveGift: number;
  description?: string;
  cardNumbers?: string;
}