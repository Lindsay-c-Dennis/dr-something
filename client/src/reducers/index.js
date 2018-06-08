import { combineReducers } from 'redux';
import songsReducer from './songs_reducer';

const rootReducer = combineReducers({
	songs: songsReducer
});

export default rootReducer;