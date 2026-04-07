import { Controller, Post, Body, Get, Param, Patch, Delete} from '@nestjs/common';

import {VerbsService} from './verbs.service';
@Controller('verbs')
//what is an @control decorator?
export class VerbsController{
    constructor(private readonly verbsService: VerbsService){}
    
    @Post()
    async addVerb(
        @Body('mood') verbMood: string,
        @Body('description') verbDesc: string, 
        @Body('conjugation') verbConj: string[],
        @Body('example') verbEx: string
    ){
        const generatedTense= await this.verbsService.insertVerb(
            verbMood,
            verbDesc,
            verbConj,
            verbEx
        );
        return{tense: generatedTense}
        
    }
    
    @Get()
    async getAllVerbs(){
        const verbs= await this.verbsService.getVerbs();
        return verbs;
    }
    
    @Get(':tense')
    getVerb(@Param('tense') verbTense: string){
        return this.verbsService.getSingleVerb(verbTense);
    }

    @Patch(':tense')
    async updateVerb(
        @Param('tense') verbTense: string, 
        @Body('mood') verbMood: string, 
        @Body('description') verbDesc: string, 
        @Body('conjugation') verbConj: string[], 
        @Body('example') verbEx: string
    ){
        await this.verbsService.updateVerb(verbTense, verbMood, verbDesc, verbConj, verbEx);
        return null;
    }

    @Delete(':tense')
    async removeVerb(@Param('tense') verbTense: string){
        await this.verbsService.deleteVerb(verbTense);
        return null;
    }
}