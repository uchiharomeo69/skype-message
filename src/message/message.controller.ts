import { MessageService } from './message.service';
import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}
  @Post()
  async create(@Body() body) {
    const { senderId, conversationId, content } = body;
    return await this.messageService.create({
      senderId,
      conversationId,
      content,
    });
  }
  @Get('/:id')
  async getConversation(
    @Param('id') conversationId: string,
    @Query('page') page: string,
  ) {
    return await this.messageService.getMessage(conversationId, parseInt(page));
  }
  @Get('/last/:id')
  async getLastmessage(@Param('id') conversationId: string) {
    return await this.messageService.getLastMessage(conversationId);
  }
}
