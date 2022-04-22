import * as R from 'ramda';

export const selectSettings = R.pathOr({}, ['state', 'settings']);
export const selectState = R.pathOr({}, ['state']);