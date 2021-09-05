import React from 'react';

/*bootstrap*/
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Movies({movie}){

	return(

		<Row>
			<Col>
				<Card>
					<Card.Img variant="top" alt={movie.original_title + ' poster'} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
					<Card.Body>
						<Card.Title>
							<h3>{movie.original_title}</h3>
						</Card.Title>
						<Card.Text>
						 	<div><h3>About the Movie:</h3></div>
						 	<div><p>{movie.overview}</p></div>
						 	
							<div><h3>Release Date:</h3></div>
							<div><p>{movie.release_date}</p></div>
						 								
							<div><h3>Language:</h3></div>
							<div><p>{movie.original_language}</p></div>
							
							<div><h3>Rating:</h3></div>
							<div><p>{movie.vote_average}</p></div>
				    	</Card.Text>
				  </Card.Body>
				</Card>
			</Col>
		</Row>	
		

	)
}