import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    lecture: {
        type: String
    },
    time: {
        type: Number
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    author: {
        type: String
    }
});

const model = mongoose.model("Question", questionSchema);
export default model; 