import mongoose from "mongoose";
import { intro } from "../controller";
import { isInteger } from "core-js/fn/number";

const commentSchema = new mongoose.Schema({
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