import { createSelector } from 'reselect';

const getState = state => state;

//  General getters
export const getCodes = createSelector(getState, state => state.codes);