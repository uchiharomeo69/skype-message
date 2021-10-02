import { Schema } from 'mongoose';

export const MessageSchema = new Schema({
  conversationId: String,
  senderId: String,
  sendAt: { type: String, default: Date.now() },
  content: String,
  status: { type: Boolean, default: true }, // xem sender da block chua
});
