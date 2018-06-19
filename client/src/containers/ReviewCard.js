import React from 'react';
import ReviewForm from '../containers/ReviewForm';

const card = {
      width: '200px',
      height: '200px',
      background: '#F2DA03',
      margin: '10px',
      borderRadius: '5px',
      float: 'left',
      border: '1px solid black'
    }

const ex = {
      float: 'right',
      background: '#d94a38',
      color: 'white',
      width: '15px',
      height: '15px',
      margin: '3px',
      padding: '0px 1px 3px 1px',
      
    }

    const edBut = {
      float: 'left',
      background: '#34C00E',
    }

export class ReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      review: this.props.review,
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.removeReview = this.removeReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.review.review !== nextProps.review.review || this.props.review.reviewer !== nextProps.review.reviewer) {
      this.setState({review: nextProps.review})
    }
    this.setState({ isEditing: false});
  }

  toggleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  removeReview(event) {
    this.props.removeReview(this.state.review)
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div style={card}>
          <button style={ex} key={this.state.review.id} onClick={this.removeReview}>
            <strong>&times;</strong>
          </button>
          <ReviewForm
            review = {this.state.review}
            isEditing={true}
           />
         </div>
        )
    } 
    
    return (
    		<div style={card}>
            <button style={edBut} onClick={this.toggleEdit}><em>Edit</em></button>
            <button style={ex} key={this.state.review.id} onClick={this.removeReview}>
              <strong>&times;</strong>
            </button>
            <div >
              <h3><em>{this.state.review.review}</em></h3> 
              <footer>- <cite title="Source Title">{this.state.review.reviewer}</cite></footer> 
            </div>    
          </div>   	
      )	  
  }
}
      
export default ReviewCard;
