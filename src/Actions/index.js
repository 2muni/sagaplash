const makeAsyncActions = actionName => ({
  REQUEST: `${actionName}/REQUEST`,
  SUCCESS: `${actionName}/SUCCESS`,
  FAILURE: `${actionName}/FAILURE`,
});
const makeActionCreator = actionType => {
  return payload => ({ type: actionType, payload });
};
const makeAsyncActionCreator = actions => {
  const actionCreator = {
    request: makeActionCreator(actions.REQUEST),
    success: makeActionCreator(actions.SUCCESS),
    failure: makeActionCreator(actions.FAILURE),
  };
  return actionCreator;
};

// Action Types
export const types = {
  FETCH_IMAGES: makeAsyncActions('FETCH_IMAGES'),
};
// Action Creators
export default {
  fetchImages: makeAsyncActionCreator(types.FETCH_IMAGES),
};
