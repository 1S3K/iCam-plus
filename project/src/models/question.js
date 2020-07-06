import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    time: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
});

const model = mongoose.model("Question", questionSchema);
export default model; 