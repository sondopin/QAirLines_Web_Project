
import mongoose from "mongoose";
import { UserType } from "./types";
import bcrypt from "bcryptjs";

// User schema
const userSchema = new mongoose.Schema<UserType>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullname: { type: String, required: true },
    sex: { type: String },
    address: { type: String },
    phone: { type: String },
    passport: { type: String },
    date_of_birth: { type: Date },
    role: { type: String, enum: ["Customer","Admin"], required: true }
  });

// Hash the password before saving the user model
userSchema.pre("save", async function (next) {
if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
}
next();
});

const User = mongoose.model<UserType>("User", userSchema);

export default User;