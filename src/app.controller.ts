import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//these are like routers
//your-domain.com/(verbs)
@Controller()//if i put 'verbs' in the parenthesis, this code will show for my domain with verbs
export class AppController {
  constructor(private readonly appService: AppService) {}

  //this will only work when it's with 
  //your-domain.com/verbs/users
  @Get()//put users as an example
  getHello(): string {
    return this.appService.getHello();
  }
}
