import express from 'express';
import adoptionRouter from './routes/adoptionRouter.js';
import swaggerUi from 'swagger-ui-express';
import specs from './config/swagger.js';
import cors from 'cors';


const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/adoptions', adoptionRouter)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


export default app;