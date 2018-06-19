import React from 'react';
import { connect } from 'react-redux';
import { addReview, updateReview } from '../actions/reviewActions';

class ReviewForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			review: this.props.review.review,
			reviewer: this.props.review.reviewer,
			id: this.props.review.id,
			isEditing: this.props.isEditing
		}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleOnSubmit = this.handleOnSubmit.bind(this)
	}

	handleOnChange(event) {
		const { value, name } = event.target;
		//debugger
		this.setState({
			[name]: value
		});
	}

	handleOnSubmit = event => {
		event.preventDefault();
		if (this.state.isEditing) {
			this.props.updateReview(this.state);
		} else {
			this.props.addReview(this.state)
			this.setState({
				review: '',
				reviewer: '',
			})
		}	
	}

	render() {
		//debugger
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<label>Your note <em>(max 75 chars)</em>:</label><br/>
					<textarea 
						maxLength="75"
						name="review"
						value={this.state.review}
						onChange={this.handleOnChange}
					/><br/>
					<label>Your name:</label><br/>
					<textarea
						maxLength="20"
						name="reviewer"
						value={this.state.reviewer}
						onChange={this.handleOnChange}
					/><br/>
					<input 
						type='submit' 
						className="btn btn-primary"
						/>		
				</form>
			</div>
		)
	}
}



export default connect(null, { addReview, updateReview })(ReviewForm);