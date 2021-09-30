import { IsNotEmpty, Length } from 'class-validator';

export class CreateMessage {
  @IsNotEmpty()
  senderId: string;
  @IsNotEmpty()
  conversationId: string;
  @IsNotEmpty()
  @Length(0, 3000)
  content: string;
}
