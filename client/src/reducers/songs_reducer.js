export default (state= {loading: false, songs: []}, action) => {
	switch (action.type) {
		case 'LOADING_SONGS':
			return [...state, {loading: true}]
		case 'FETCH_SONGS':
			return {loading: false, songs: action.payload}
		default:
			return state;		
	}
}