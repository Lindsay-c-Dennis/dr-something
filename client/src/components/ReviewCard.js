import React from 'react';

export const ReviewCard = (props) => {
	
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
    float: 'left',
    background: '#D94A38',
    color: 'white',
    width: '20px',
    height: '20px',
    margin: '3px',
    padding: '1px',
  }

  return (
  		<div style={card}>
          <div style={ex}>
            <strong>X</strong>
          </div>
          		<blockquote>
             			<p>{props.review.review}</p> 
             			<footer>- <cite title="Source Title">{props.review.reviewer}</cite></footer> 
          		</blockquote>
          </div>    
     	
    )	  

    }
