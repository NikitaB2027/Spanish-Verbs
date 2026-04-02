import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//these are like routers
//your-domain.com/(prodcuts)
@Controller()//if i put 'products' in the parenthesis, this code will show for my domain with products
export class AppController {
  constructor(private readonly appService: AppService) {}

  //this will only work when it's with 
  //your-domain.com/products/users
  @Get()//put users as an example
  getHello(): string {
    return this.appService.getHello();
  }
}
