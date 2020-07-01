import {join} from "path";
import "core-js";
import express from "express";
import logger from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";


const app = express();

app.use(helmet());
app.set('view engine', 'pug');
app.use(express.static(join(__dirname, 'static')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

app.get('/', (req,res)=>{
  res.render("player");
});

const listening = ()=>{
  console.log(`Server Running : http://localhost:${PORT}`);
};

app.listen(PORT, listening);