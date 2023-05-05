import {screenNames} from './screenNames';
import {Person} from '../features/people/entities';

export type NavigationStack = {
  [screenNames.HOME]: undefined;
  [screenNames.PROFILE]: {person: Person};
};
