export interface Event {
  id: number;
  title: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
  createdAt: string;
  maxParticipants: number;
  currentParticipants: number;
  registrationDeadline?: string;
  isFull: boolean;
}
