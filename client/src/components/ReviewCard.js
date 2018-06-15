import React from 'react';

export const ReviewCard = ({ review, removeReview, editReview }) => {
  
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
  
    return (
    		<div style={card}>
            <button style={ex} key={review.id} onClick={()=> removeReview(review)}>
              <strong>&times;</strong>
            </button>
              <h3><em>{review.review}</em></h3> 
              <footer>- <cite title="Source Title">{review.reviewer}</cite></footer> 
            </div>    
       	
      )	  
      
}
