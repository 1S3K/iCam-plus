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
    },
    available: {
        type:Number
    }
});

const model = mongoose.model("Comment", commentSchema);
export default model; 