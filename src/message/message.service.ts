import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMessage } from './dto/createMessage.dto';
import { Message } from './interfaces/message.interface';
@Injectable()
export class MessageService {
  constructor(
    @InjectModel('Message') private readonly messageModel: Model<Message>,
  ) {}
  async create(data: CreateMessage) {
    let ms = new this.messageModel({ ...data, sendAt: Date.now() });
    return await ms.save();
  }

  async getMessage(conversationId: string, skip: number) {
    if (!skip)
      return await this.messageModel.find({ conversationId }).sort('sendAt');
    return await this.messageModel.aggregate([
      { $match: { conversationId } },
      {
        $sort: { sendAt: -1 },
      },
      {
        $skip: skip,
      },
      {
        $limit: 10,
      },
      {
        $sort: { sendAt: 1 },
      },
    ]);
  }

  async getLastMessage(conversationId: string) {
    let arr = await this.messageModel
      .find({ conversationId })
      .sort({ sendAt: -1 })
      .limit(1);
    return arr.length > 0 ? arr[0] : {};
  }
}
