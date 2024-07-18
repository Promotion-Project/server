import { join } from 'path';

const runMigrations = async () => {
  try {
    const createPromotionsTable = await import(join(__dirname, 'src/migrations/20230712_create_promotions_table'));
    const createGiftsTable = await import(join(__dirname, 'src/migrations/20230712_create_gifts_table'));
    const insertGifts = await import(join(__dirname, 'src/migrations/20230712_insert_gifts'));
    
    await createPromotionsTable.default();
    await createGiftsTable.default();
    await insertGifts.default();

    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
  }
};

runMigrations();
