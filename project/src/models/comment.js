import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question"
    },
    commentType: {
        type:Number
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