import React from 'react';

/*bootstrap*/
import Card from 'react-bootstrap/Card'

export default function Movies({movie}){

	return(

		<div className="container movie-container mb-5">
			<div className="row justify-content-center">
				<div className="col-10 col-md-10">
					<Card className="p-3">
						<h1 className="text-center my-4">{movie.original_title}</h1>
						<div className="text-center shadow-sm p-3 mb-2 bg-body rounded">
							<Card.Img variant="top" alt={movie.original_title + ' poster'} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="img-fluid image"/>
						</div>
						<Card.Body>
							<Card.Title>
								
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
				</div>
			</div>
		</div>
	)
}