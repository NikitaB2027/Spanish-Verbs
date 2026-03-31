import { Injectable } from '@nestjs/common';

import {Verbs} from './verbs.model'
@Injectable()
export class VerbsService {
    verbs: Verbs[] = [];

    insertProduct(tense: string, mood: string, desc: string, conjugation: string[], example: string) {
        const verbId = new Date().toString();
        const newVerb = new Verbs(verbId, tense, mood, desc, conjugation, example);
        this.verbs.push(newVerb);
        return verbId;
    }
}