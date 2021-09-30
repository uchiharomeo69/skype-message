import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  hello() {
    return 'hello world';
  }
  @Get('/a')
  hello1() {
    return process.env.MONGO_URL;
  }
}
