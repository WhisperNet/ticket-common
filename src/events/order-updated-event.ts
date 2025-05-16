import { Subjects } from './subjects';

export interface OrderUpdatedEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
