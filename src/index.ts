import express, { Request, Response, NextFunction }  from 'express';
import cors from 'cors';
import api from './api/discovermovie';
import path from 'path';
const app = express();
const port = process.env.PORTNUM;
const regYYYY = /^\d{4}$/;

// API's in use don't require preflight but good to have
app.use(cors());

app.get('/', (req, res) => {
  res.redirect('./index.html');  
});

app.get('/api/v1/discovermovie/:year', async (req, res) => {
  if(regYYYY.test(req.params.year)) {
    let response: any = await api.discovermovie(req.params.year);
    res.json(response);
  } else{
    res.status(400);
    res.json({error: "Year must follow YYYY format"});
  }
});

// unecessary for api but used for testing page.
app.use(express.static(path.join(__dirname + "../../src/static/")));

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

export default app;