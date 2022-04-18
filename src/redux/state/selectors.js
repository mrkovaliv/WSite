import * as R from 'ramda';

export const selectSettings = R.path(['state', 'settings']);
export const selectState = R.path(['state']);