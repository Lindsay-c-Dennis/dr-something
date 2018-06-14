import { combineReducers } from 'redux';
import songsReducer from './songs_reducer';
import illustrationsReducer from './illustrations_reducer';
import videosReducer from './videos_reducer';
import reviewsReducer from './reviews_reducer';

const rootReducer = combineReducers({
	songs: songsReducer,
	illustrations: illustrationsReducer,
	videos: videosReducer,
	reviews: reviewsReducer
});

export default rootReducer;