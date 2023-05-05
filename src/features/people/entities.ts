export interface Person {
  id: string;
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: PersonType;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
}

export interface GeneralInfo {
  next?: string;
  previous?: string;
  results: Person[];
}

export interface PeopleResponse {
  hasNext?: boolean;
  hasPrev?: boolean;
  people: Person[];
}

export interface Planet {
  name: string;
}

export interface Species {
  name: string;
}

export enum PersonType {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}
