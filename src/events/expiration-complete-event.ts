import { Subjects } from './subjects';

export interface ExpirationEventComplete {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
