import express, {Application, Request, Response, NextFunction} from 'express';

const port = process.env.PORT || 3000;

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  next();
}

const app: Application = express();
app.use(logRequest);

app.get( "/", (req, res) => {
    res.send( "Hello From Express With TypeScript" );
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});