
import { Controller, Post, Body} from '@nestjs/common';

import { VerbsService } from './verbs.service';

@Controller('verbs')
export class VerbsController {
    constructor(private readonly verbsService: VerbsService){}

    @Post()
    addVerb(
        @Body('tense') verbTense: string, 
        @Body('mood') verbMood: string, 
        @Body('description') verbDesc: string, 
        @Body('conjugation') verbConj: string[], 
        @Body('example') verbEx: string
    ): any {
        const generatedId=this.verbsService.insertProduct(
            verbTense, 
            verbMood, 
            verbDesc, 
            verbConj, 
            verbEx 
        );
        return {id: generatedId};
    }
    //AKJGNJIOKMLGAJOIPA:LMD
}