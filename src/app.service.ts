import { Injectable } from '@nestjs/common';

//this is the same as the video
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
