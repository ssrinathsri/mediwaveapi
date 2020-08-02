import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    fullName: {type: String, requied: true},
    mobileNumber: { type: String, requried: true},
    emailId: { type: String, requried: true},
    password: { type: String, requried: true},
    follow:{type: Boolean, requried: true}
});

export interface UserInterface {
    fullName: string;
    mobileNumber: string;
    emailId: string;
    password: string;
    follow: boolean;
}
