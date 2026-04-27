import mongoose from "mongoose";

export interface IUser {
    name: string
    email: string
    password: string
    role: 'admin' | 'customer'
    createAt: Date
}

const UserSchema = new mongoose.Schema<IUser>(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        role: {type: String, enum: ['admin', 'customer'], default: 'customer'},
    },
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema)

export default User