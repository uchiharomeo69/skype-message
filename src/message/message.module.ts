import { MessageSchema } from './schemas/message.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: `Message`, schema: MessageSchema }]),
  ],
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessageModule {}
