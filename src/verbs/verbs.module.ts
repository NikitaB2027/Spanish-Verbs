import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import {VerbsController} from './verbs.controller';
import{VerbsService} from './verbs.service';
import {VerbSchema} from './verbs.model';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Verb', schema: VerbSchema}])],
    controllers: [VerbsController],
    providers: [VerbsService],
})
export class VerbsModule {}