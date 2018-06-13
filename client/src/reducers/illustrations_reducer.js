const illustrationsReducer = (state= {loading: false, pics: [], error: ''}, action={}) => {
	switch (action.type) {
		case 'LOADING_PICTURES':
			return {...state, loading: true}
		case 'FETCH_PICTURES_SUCCESS':
			return {loading: false, pics: action.payload}
		case 'FETCH_PICTURES_FAILED':
			return {...state, error: action.payload, loading: false}
		default:
			return state;		
	}
}

export default illustrationsReducer;