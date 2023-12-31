import { InferSchemaType, model } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    discordId: String,
    balance: Number,
    lastWorkTime: String,
})

type User = InferSchemaType<typeof userSchema>

export const userModel =  model<User>("users", userSchema)
