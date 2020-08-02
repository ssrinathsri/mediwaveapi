import * as mongoose from 'mongoose';

export const FeedsSchema = new mongoose.Schema({
    title: {type: String, requried: true },
    author: {type: String, requried: true },
});

export interface FeedsInterface {
    title: string;
    author: string;
}
