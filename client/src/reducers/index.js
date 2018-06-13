import { combineReducers } from 'redux';
import songsReducer from './songs_reducer';
import illustrationsReducer from './illustrations_reducer';

const rootReducer = combineReducers({
	songs: songsReducer,
	illustrations: illustrationsReducer
});

export default rootReducer;