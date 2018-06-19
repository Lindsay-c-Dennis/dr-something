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

export const updateReview = (review) => {
	return dispatch => {
		const url = `http://localhost:3001/reviews/${review.id}`
		return fetch(url, {
			method: 'PATCH',
			body: JSON.stringify({review: review}),
			headers:{
				'Content-Type': 'application/json'
			}
		}).then(response => response.json())
		.then(res => dispatch({ 
				type: 'UPDATE_REVIEW',
				payload: res 
			})
		)
		.catch(error => console.error('error:', error))
	}
}		

export const removeReview = (review) => {
	return dispatch => {
		const url = `http://localhost:3001/reviews/${review.id}` 
		return fetch(url, {
			method: 'DELETE'
		}).then(response => response.json())
		.then(res => dispatch({ 
				type: 'REMOVE_REVIEW',
				payload: review.id 
			})
		)
		.catch(error => console.error('error:', error))
	}
}			

