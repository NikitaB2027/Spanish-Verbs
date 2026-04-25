import * as mongoose from 'mongoose';

//I got chatGPT's help for this part on tab "tense"
export const VerbSchema = new mongoose.Schema({
    tense: { type: String, required: true, unique: true },
    mood: {type: String, required: true},
    description: {type: String, required: true},
    conjugation: {type: [String], required: true},
    example: {type: [String], required: true},
});

export interface Verb extends mongoose.Document{
    tense: string;
    mood: string;
    description: string; 
    conjugation: string[];
    example: string[];
}
