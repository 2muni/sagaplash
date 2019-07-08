import { types } from '../Actions';
import produce from 'immer';

const initialState = {
  status: 'initial',
  data: [],
  nextPage: 1,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  const { FETCH_IMAGES } = types;
  switch (type) {
    case FETCH_IMAGES.REQUEST:
      return produce(state, draft => {
        draft.status = 'pending';
      });
    case FETCH_IMAGES.SUCCESS:
      return produce(state, draft => {
        draft.status = 'success';
        console.log(payload);
        draft.data = state.data.concat(payload);
        draft.nextPage += 1;
      });
    case FETCH_IMAGES.FAILURE:
      return produce(state, draft => {
        draft.error = payload;
        draft.status = 'failure';
      });
    default:
      return state;
  }
};
