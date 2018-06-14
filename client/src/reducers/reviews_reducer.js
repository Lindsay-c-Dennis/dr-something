const reviewsReducer = (state= {loading: false, revs: [], error: ''}, action={}) => {
	switch (action.type) {
		case 'LOADING_REVIEWS':
			return {...state, loading: true}
		case 'FETCH_REVIEWS_SUCCESS':
			return {loading: false, revs: action.payload}
		case 'FETCH_REVIEWS_FAILED':
			return {...state, error: action.payload, loading: false}
		case 'ADD_REVIEW':
			return {...state, revs: [...state.revs, action.payload]}
		default:
			return state;		
	}
}

export default reviewsReducer;