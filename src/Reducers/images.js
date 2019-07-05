import { types } from '../Actions';

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
      return { ...state, status: 'pending' };
    case FETCH_IMAGES.SUCCESS:
      return {
        ...state,
        data: payload,
        status: 'success',
        page: state.page + 1,
      };
    case FETCH_IMAGES.FAILURE:
      return { ...state, error: payload, status: 'failure' };
    default:
      return state;
  }
};
