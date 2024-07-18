import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import promotionRoutes from './routes/promotionRoutes';
import swaggerOptions from './config/swaggerConfig';
import giftRoutes from './routes/giftRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api', promotionRoutes);
app.use('/api', giftRoutes);

export default app;