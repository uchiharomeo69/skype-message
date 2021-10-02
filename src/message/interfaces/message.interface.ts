export interface Message {
  _id: string;
  senderId: string;
  conversationId: string;
  sendAt: number;
  content: string;
  status: boolean;
}
