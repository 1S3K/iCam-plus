import {join} from "path";
import express from "express";
import logger from "morgan";

const PORT = 3000;
const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static(join(__dirname, 'static')));
app.use(logger('dev'));

app.get('/', (req,res)=>{
  res.render("player");
});

const listening = ()=>{
  console.log(`Server Running : http://localhost:${PORT}`);
};

app.listen(PORT, listening);