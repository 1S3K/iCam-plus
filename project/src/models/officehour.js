import mongoose from "mongoose";

const officeHourSchema = new mongoose.Schema({
    lecture: {
        type: Number
    },
    day: {
        type: String
    },
    begin: {
        type: Number
    },
    end: {
        type: Number
    }
});

const model = mongoose.model("Officehour", officeHourSchema);
export default model; 