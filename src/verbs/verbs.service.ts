import { Injectable } from '@nestjs/common';

import {Verbs} from './verbs.model'
@Injectable()
export class VerbsService {
    verbs: Verbs[] = [];

    insertProduct(tense: string, mood: string, desc: string, conjugation: string[], example: string) {
        
        const newVerb = new Verbs(tense, mood, desc, conjugation, example);
        this.verbs.push(newVerb);
    }
}