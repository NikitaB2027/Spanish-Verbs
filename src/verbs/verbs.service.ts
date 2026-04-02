import { Injectable, NotFoundException } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

import {Verb} from './verbs.model';

@Injectable()
export class VerbsService {
   private verbs: Verb[] = [];

   constructor(@InjectModel('Verb') private readonly verbModel: Model<Verb>){ }

   async insertVerb(tense: string, mood: string, desc:string, conj: string[], ex: string) {
    const newVerb= new this.verbModel({
        tense,
        mood,
        description: desc, 
        conjugation: conj,
        example: ex,
    });
    const result =await newVerb.save();
    console.log(result);
    return result.id as string;
   }
   
   

   async getVerbs(){
    const verbs= await this.verbModel.find().exec();
    return verbs.map((verb)=>({
        id: verb.id, 
        tense: verb.tense, 
        mood: verb.mood,
        description: verb.description, 
        conjugation: verb.conjugation,
        example: verb.example
    }));
   }

   async getSingleVerb(verbId: string){
    const verb = await this.findVerb(verbId);
    return {
        id: verb.id, 
        tense: verb.tense, 
        mood: verb.mood,
        description: verb.description, 
        conjugation: verb.conjugation,
        example: verb.example
    };
   }

   async updateVerb(
    verbId: string, 
    tense: string, 
    mood: string,
    desc: string, 
    conjugation: string[],
    example: string
){
    const updatedVerb=await this.findVerb(verbId);
    if(tense){
        updatedVerb.tense= tense;
    }
    if(mood){
        updatedVerb.mood= mood;
    }
    if(desc){
        updatedVerb.description= desc;
    }
    if(conjugation){
        updatedVerb.conjugation= conjugation;
    }
    if(example){
        updatedVerb.example= example;
    }
    updatedVerb.save();
   }

   async deleteVerb(verbId: string){
    const result =await this.verbModel.deleteOne({_id: verbId}).exec();
    console.log(result);
   }

   private async findVerb(id:string): Promise<Verb>{
    let verb;
    try{
        verb= await this.verbModel.findById(id);
    } catch (error) {
        throw new NotFoundException('Could not find verb.')
    }
    if(!verb){
        throw new NotFoundException('Could not find verb');
    }
    return verb;
   }
   //done!!
}