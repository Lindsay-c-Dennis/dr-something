import fetch from 'isomorphic-fetch';

export const fetchRevs = () => (dispatch) => {
		
		dispatch({ type: 'LOADING_REVIEWS' });
		fetch('http://localhost:3001/reviews')
			.then(response => response.json())
			.then(responseJSON => {
				const reviews = responseJSON;
				dispatch({ type: 'FETCH_REVIEWS_SUCCESS', payload: reviews })
			})
			.catch(error => dispatch({ type: 'FETCH_REVIEWS_FAILED', payload: error }))
}

export const addReview = (review) => {
	
	return dispatch => {
		return fetch('http://localhost:3001/reviews', {
			method: 'POST',
			body: JSON.stringify({review: review}),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
		.then(res => dispatch({ 
				type: 'ADD_REVIEW',
				payload: res 
			})
		)
		.catch(error => console.error('error:', error))
	}
}

export const editReview = (review) => {
	return dispatch => {
		return fetch('/reviews', {
			method: 'PUT',
			body: JSON.stringify(review),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
		.then(res => dispatch({ 
				type: 'EDIT_REVIEW',
				payload: res 
			})
		)
		.catch(error => console.error('error:', error))
	}
}		

export const removeReview = (review) => {
	return dispatch => {
		return fetch('/reviews', {
			method: 'DELETE',
			body: JSON.stringify(review),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
		.then(res => dispatch({ 
				type: 'DELETE_REVIEW',
				payload: res 
			})
		)
		.catch(error => console.error('error:', error))
	}
}			

