import {SAMPLE} from '../actions/dispatchActions';

const initialState = {
  sample: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SAMPLE.DISPATCH_CALL: {
      const {data} = action.payload;
      return {...state, sample: data.journies};
    }
    default: {
      return state;
    }
  }
}
