import { Mutations, MutationsEnum } from './interfaces';
import { State } from './state';

export const mutations: Mutations = {
  [MutationsEnum.SET_LOCATION_HASH]: (state: State, payload: string) => {
    state.locationHash = payload;
  },
};
