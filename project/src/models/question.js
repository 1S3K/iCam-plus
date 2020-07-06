import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    time: {
        type: Date
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