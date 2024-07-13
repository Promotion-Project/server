import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gift Promotion API',
      version: '1.0.0',
      description: 'API for managing gift promotions',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/models/*.ts'],
};

export default options;