import { combineReducers }              from 'redux';
import { routerReducer as routing }     from 'react-router-redux';

import * as types                       from '../types';
import init                             from './initReducer';
import camera                           from './cameraReducer';
import cloudimage                       from './cloudimageReducer';
import imagerecognition                 from './imageRecognitionReducer';

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
    isFetching,
    init,
    routing,
    camera,
    cloudimage,
    imagerecognition
});

export default rootReducer;
