import React from 'react';
import { connect } from 'react-redux';
import { ReviewCard } from './ReviewCard'
import ReviewForm from './ReviewForm';
import { fetchRevs, addReview, updateReview, removeReview } from '../actions/reviewActions'

class ReviewBoard extends React.Component {

	componentDidMount() {
        if (this.props.reviews.length === 0) {
        	this.props.fetchRevs();
    	}
    }

	render() {
		const { reviews, updateReview, removeReview } = this.props
		return (
			<div>
				<div className="justify-content-center">
					<h1>Review Board</h1>
					<h2>Leave a Note for Dr. Something!</h2>
				</div>
				
				<div>
					<ReviewForm 
						review=''
						reviewer=''
						isEditing={false}
						/>
					{reviews.map(review => <ReviewCard key={review.id} removeReview={removeReview} updateReview={updateReview} review={review}/>)}
				</div>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
	
	return {
		reviews: state.reviews.revs
	}
}

export default connect(mapStateToProps, { fetchRevs, addReview, updateReview, removeReview })(ReviewBoard);