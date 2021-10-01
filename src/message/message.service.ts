import { CreateMessage } from './dto/createMessage.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Message } from './interfaces/message.interface';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}
  async create(data: CreateMessage) {
    return await new this.messageModel(data).save();
  }

  async getMessage(conversationId: string, page: number) {
    if (!page)
      return await this.messageModel.find({ conversationId }).sort('sendAt');
    return await this.messageModel
      .find({ conversationId })
      .sort('sendAt')
      .skip((page - 1) * 10)
      .limit(100);
  }

  async getLastMessage(conversationId: string) {
    let arr = await this.messageModel
      .find({ conversationId })
      .sort({ sendAt: -1 })
      .limit(1);
    return arr.length > 0 ? arr[0] : {};
  }
}
