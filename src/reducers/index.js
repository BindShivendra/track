import { combineReducers } from 'redux';

import listreducer from './listreducer';

export default combineReducers({
    lists: listreducer
});