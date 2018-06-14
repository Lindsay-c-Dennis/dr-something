import React from 'react';
import { connect } from 'react-redux';
import { addReview } from '../actions/reviewActions';

class ReviewForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			review: '',
			reviewer: '',
		}
	}

	handleOnChange = event => {
		const { value, name } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleonSubmit = event => {
		event.preventDefault();
		this.props.addReview(this.state)
		this.setState({
			review: '',
			reviewer: '',
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<label>Your note:</label><br>
					<input 
						type='textarea'
						className='form-control'
						name="review"
						value={this.state.review}
						onChange={this.handleOnChange}
					/>
					<label>Your name:</label><br>
					<input
						type="text"
						className="form-control"
						name="reviewer"
						value={this.state.handleoOnChange}
					/>
					<input type='submit' className="btn btn-primary" />		
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { reviews: state.reviews }
}

export default connect(mapStateToProps, { addReview })(ReviewForm);