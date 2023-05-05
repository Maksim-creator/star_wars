import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import camelcaseKeys from 'camelcase-keys';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

import {
  GeneralInfo,
  PeopleResponse,
  PersonType,
  Planet,
  Species,
} from '../entities';
import {Vehicle} from '../components/Vehicles/entities';
import {Starship} from '../components/Starships/entities';
import {Film} from '../components/Films/entities';

export const peopleQueries = createApi({
  reducerPath: 'people',
  tagTypes: ['People'],
  baseQuery: fetchBaseQuery({baseUrl: 'https://swapi.dev/api'}),
  endpoints: builder => ({
    getPeople: builder.query<PeopleResponse, number>({
      query: page => ({
        url: `/people/?page=${page}`,
      }),
      transformResponse: (response: GeneralInfo) => ({
        hasPrev: !!response.previous,
        hasNext: !!response.next,
        people: camelcaseKeys(response.results).map(person => ({
          ...person,
          gender:
            person.gender !== PersonType.MALE &&
            person.gender !== PersonType.FEMALE
              ? PersonType.OTHER
              : person.gender,
          id: uuidv4(),
        })),
      }),
    }),
    getPlanet: builder.query<string, number>({
      query: planetId => ({
        url: `/planets/${planetId}`,
      }),
      transformResponse: (response: Planet) => response.name,
    }),
    getSpecies: builder.query<string, number>({
      query: speciesId => ({
        url: `/species/${speciesId}`,
      }),
      transformResponse: (response: Species) => response.name,
    }),
    getStarship: builder.query<Starship, number>({
      query: starshipId => ({
        url: `/starships/${starshipId}`,
      }),
      transformResponse: (response: Starship) => camelcaseKeys(response),
    }),
    getVehicle: builder.query<Vehicle, number>({
      query: vehicleId => ({
        url: `/vehicles/${vehicleId}`,
      }),
      transformResponse: (response: Vehicle) => camelcaseKeys(response),
    }),
    getFilm: builder.query<Film, number>({
      query: filmId => ({
        url: `/films/${filmId}`,
      }),
      transformResponse: (response: Film) => camelcaseKeys(response),
    }),
  }),
});

export const {
  useGetPeopleQuery,
  useGetPlanetQuery,
  useGetSpeciesQuery,
  useGetStarshipQuery,
  useGetVehicleQuery,
  useGetFilmQuery,
} = peopleQueries;
