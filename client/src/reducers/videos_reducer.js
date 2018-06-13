const videosReducer = (state= {loading: false, vids: [], error: ''}, action={}) => {
	switch (action.type) {
		case 'LOADING_VIDEOS':
			return {...state, loading: true}
		case 'FETCH_VIDEOS_SUCCESS':
			return {loading: false, vids: action.payload}
		case 'FETCH_VIDEOS_FAILED':
			return {...state, error: action.payload, loading: false}
		default:
			return state;		
	}
}

export default videosReducer;