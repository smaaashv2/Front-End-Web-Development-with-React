import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

	const RenderDish = (dish) => {
        if (dish != null) {
            return(
                <div className="col-12 col-md-5 m-1">
              	<Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        }
        else {
            return(
                <div />
            );
        }
    }

    const RenderComments = (comments) => {
    	if(comments != null){
    		const commentsList = comments.map((cc) => {
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
                    	{commentsList}
               		 </ul>
                </div>
        	);
    	}
    	else {
    		return(
    			<div/>
    		);
        }
    }


    const Dishdetail = (props) => {
        if (props.dish == null) {
            return (<div></div>);
        }
        const renderDish = RenderDish(props.dish)
        const renderComments = RenderComments(props.comments)
        return (
        	<div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {renderDish}
                    {renderComments}
                </div>
            </div>
        );
    }

export default Dishdetail;