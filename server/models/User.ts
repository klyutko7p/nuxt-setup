import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, unique: true },
    password: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const User = model<any>("User", UserSchema);
