import { MessageService } from './message.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Post()
  async create(@Body() body) {
    const { senderId, conversationId, content } = body;
    const sendAt = new Date().toISOString();
    return await this.messageService.create({
      senderId,
      conversationId,
      content,
      sendAt,
    });
  }
  @Get('/:id')
  async getConversation(@Param('id') conversationId: string) {
    return await this.messageService.getMessage(conversationId);
  }
  @Get('/last/:id')
  async getLastmessage(@Param('id') conversationId: string) {
    return await this.messageService.getLastMessage(conversationId);
  }
}
