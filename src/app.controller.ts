import { Controller, Get } from '@nestjs/common';

@Controller()
export class MessageController {
  @Get()
  hello() {
    return 'hello world';
  }
}
