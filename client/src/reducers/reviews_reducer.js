const reviewsReducer = (state= {loading: false, revs: [], error: ''}, action) => {
	switch (action.type) {
		case 'LOADING_REVIEWS':
			return {...state, loading: true}
		case 'FETCH_REVIEWS_SUCCESS':
			return {loading: false, revs: action.payload}
		case 'FETCH_REVIEWS_FAILED':
			return {...state, error: action.payload, loading: false}
		case 'ADD_REVIEW':
			return {...state, revs: [...state.revs, action.payload]}
		case 'UPDATE_REVIEW':
			const newRevs = [...state.revs.filter(review => review.id !== action.payload.id), action.payload].sort(function(a, b) {return (a.id - b.id)})
			return {...state, revs: newRevs }	
		case 'REMOVE_REVIEW':
			return {...state, revs: state.revs.filter(rev => rev.id !== action.payload)}
		default:
			return state;		
	}
}

export default reviewsReducer;