import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
              	<Card>
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                      <CardTitle>{this.props.selectedDish.name}</CardTitle>
                      <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else
            return(
                <div />
            );
    }

    renderComments(comments) {
    	if(comments != null){
    		const comments = this.props.selectedDish.comments.map((cc) => {
           		return (
       		     	<li key={cc.id}>
           				<p>{cc.comment}</p>
       			  		<p>--{cc.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cc.date)))}</p>
       		    	</li> 	
       		   	);
        	});
        	return(
        		<div className="col-12 col-md-5 m-1">
                	<h4>Comments</h4>
                	 <ul className='list-unstyled'>
                    	{comments}
               		 </ul>
                </div>
        	);
    	}
    	else
    		return(
    			<div/>
    		);
    }


    render() {
    	const selectedDish = this.props.selectedDish
        if (selectedDish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(selectedDish)
        const commentItem = this.renderComments(selectedDish.comments)
        return (
            <div className='row'>
                {dishItem}
                {commentItem}
            </div>
        );
    }
}

export default Dishdetail;