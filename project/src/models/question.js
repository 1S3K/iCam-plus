import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    lecture: {
        type: Number
    },
    quesType: {
        type: Number
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