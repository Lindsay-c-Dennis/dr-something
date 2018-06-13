const songsReducer = (state= {loading: false, tiles: [], error: ''}, action={}) => {
	switch (action.type) {
		case 'LOADING_SONGS':
			return {...state, loading: true}
		case 'FETCH_SONGS_SUCCESS':
			//debugger
			return {loading: false, tiles: action.payload}
		case 'FETCH_SONGS_FAILED':
			return {...state, error: action.payload, loading: false}
		default:
			return state;		
	}
}

export default songsReducer;