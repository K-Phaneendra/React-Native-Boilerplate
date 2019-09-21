import {API_GET} from './APIMethods';
import {SAMPLE} from '.';

export const fetchSampleContent = async () => {
  const url = SAMPLE.FETCH_SAMPLE_CONTENT;
  const APIResponse = API_GET(url);
  try {
    const data = await APIResponse;
    return data;
  } catch (error) {
    return error;
  }
};
