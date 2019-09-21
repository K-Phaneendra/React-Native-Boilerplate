import {SAMPLE} from '.';

export const fetchSampleContents = (dispatch, payload) =>
  dispatch({type: SAMPLE.DISPATCH_CALL, payload});
