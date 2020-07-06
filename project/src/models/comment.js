import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    text: {
        type: String
    },
    author: {
        type: String
    }
});

const model = mongoose.model("Comment", commentSchema);
export default model; 