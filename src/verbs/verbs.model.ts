import * as mongoose from 'mongoose';

export const VerbSchema = new mongoose.Schema({
    tense: {type: String, required: true},
    mood: {type: String, required: true},
    description: {type: String, required: true},
    conjugation: {type: [String], required: true},
    example: {type: String, required: true},
});

export interface Verb extends mongoose.Document{
    id: string;
    tense: string;
    mood: string;
    description: string; 
    conjugation: string[];
    example: string;
}