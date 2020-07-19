import app from "./app";
import "./db";
import "./models/question";
import "./models/comment";
import "./models/officehour";

const PORT = 80;

const handleListening = () => console.log(`✅ Listening on: http://www.comedu.org in port ${PORT}`);

app.listen(PORT, handleListening);
