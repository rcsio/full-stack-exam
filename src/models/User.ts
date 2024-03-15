import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, required: true },

  // TODO: Hash
  password: { type: String, required: true },

  images: [String],
});

export default mongoose.model("User", userSchema);
