import app from "./app";
import "./db";
import "./models/question";
import "./models/comment";

const PORT = 3000;

const handleListening = () => console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);