import { Controller, Get, Header} from '@nestjs/common';
import { AppService } from './app.service';

//making the domain here
@Controller() //could have like 'Spanish' 
export class AppController {
  constructor(private readonly appService: AppService) {}

  //this only works with the correct domain (/spanish)
  @Get()//an even smaller folder if you put something in here (/verbs)
  @Header('Content-Type', 'text/html')//to specify the type of data we are sending back
  getHello():{name:string} {
    return {name: 'Max'};
  }
}
