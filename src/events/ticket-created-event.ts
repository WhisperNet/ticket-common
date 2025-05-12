import { Subjects } from './subjects';

export interface TicketCreatedEvent {
  subject: Subjects.TciketCreated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
