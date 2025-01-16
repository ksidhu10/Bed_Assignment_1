import express, { Express} from 'express';

const app: Express = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;
