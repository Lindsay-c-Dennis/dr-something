import React from 'react';
import { connect } from 'react-redux';
import { ReviewCard } from '../components/ReviewCard'
import { removeReview, editReview } from '../actions/reviewActions'

class Reviews extends React.Component {

	render() {
		const { reviews, removeReview, editReview } = this.props
		return (
			<div>
				<div className="justify-content-center">
					<h1>Review Board</h1>
					<h2>Leave a Note for Dr. Something!</h2>
				</div>
				<div>
					{reviews.map(review => {
						<ReviewCard key={review.id} removeReview={removeReview} editReview={editReview} review={review}/>
					})}
				</div>
			</div>
			)
	}
}

export default connect(mapStateToProps, { removeReview, editReview })(ReviewBoard);