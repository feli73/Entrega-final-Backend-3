import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Adoptions',
      version: '1.0.0',
      description: 'API REST para gestión de adopciones'
    },
    servers: [
      {
      url: process.env.BASE_URL || 'http://localhost:8080'
    }
    ],

    components: {
      schemas: {
        Adoption: {
          type: 'object',
          required: ['name', 'species'],
          properties: {
            name: {
              type: 'string',
              example: 'lazy'
            },
            species: {
              type: 'string',
              example: 'perro'
            }
          }
        }
      }
    }
  },

  apis: ['./src/routes/*.js']
};

const specs = swaggerJSDoc(swaggerOptions);

export default specs;
