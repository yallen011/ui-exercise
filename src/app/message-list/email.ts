export interface Email {
  id: string;
  subject: string;
  sender: string;
  body: string;
  tags: string[];
  date: string;
  starred?: boolean;
  checked?: boolean;
  important?: boolean;
  read?: boolean;
  senderName?: string;
}
