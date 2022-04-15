import { MutationPayload } from 'vuex';
import { State } from './state';

export enum MutationsEnum {
  SET_LOCATION_HASH = 'SET_LOCATION_HASH',
}

export type Mutations = Record<
  MutationsEnum,
  (state: State, payload: any) => void
>;
