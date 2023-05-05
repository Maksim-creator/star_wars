import {PersonType} from '../people/entities';

export interface FansState {
  female: string[];
  male: string[];
  other: string[];
}

export interface SetFansCountPayload {
  personId: string;
  type: PersonType;
}
