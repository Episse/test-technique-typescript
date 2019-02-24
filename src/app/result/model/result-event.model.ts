export type stateResult = 'created' | 'received' | 'seen';

export interface ResultEventModel {
  id: stateResult; // created | received | seen
  idOwner: number;
  createdAt: Date;
}
