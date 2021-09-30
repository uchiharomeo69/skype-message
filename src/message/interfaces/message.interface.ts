export interface Message {
  _id: string;
  senderId: string;
  conversationId: string;
  sendAt: string;
  content: string;
  status: boolean;
}
