import { Controller, Post} from '@nestjs/common';

@Controller('verbs')
export class VerbsController {
    
    @Post()
    addVerb(): any {
        return 'Verb added';
    }
}