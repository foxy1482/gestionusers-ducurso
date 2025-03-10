import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true, minLength: 2, maxLength: 20 },
    surname: { type: String, required: true, minLength: 4, maxLength: 50 },
    email: { type: String, required: true},
    password: {type: String, required: true}
})
const userModel = model("user",userSchema);

export default userModel;