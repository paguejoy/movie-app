import React, {useState} from 'react'

/*bootstrap*/
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


// components
import Movies from './Movies'

export default function Search(){

	const [query, setQuery] = useState('');

	const [movies, setMovies] = useState(['']);

	const searchMovies = async (event) => {
		event.preventDefault();


		const url = `https://api.themoviedb.org/3/search/movie?api_key=f6b954b3637f8afc47bb417a928b2317&language=en-US&query=${query}&include_adult=false`

		try{
			const response = await fetch(url)
			const data = await response.json()
			console.log(data);	//array of objects
			setMovies(data.results);

		} catch(error){
			console.error(error)
		}

	}

	return (

	<div className="container">
		<div className="row justify-content-center">
			<div className="col-12 col-md-8">
				<Form className="form my-5" onSubmit={searchMovies}>
					<Form.Group>
						<Form.Label htmlFor="query" className="label text-white"> <h1>Movie Name</h1> </Form.Label>
						<Form.Control type="text" className="input" name="query" placeholder="i.e. The Flash" value={query} onChange={(e) => setQuery(e.target.value)}/>
						<div className="mt-4">
							<Button className="btn btn-info button" type="submit">Search</Button>
						</div>
					</Form.Group>
				</Form>
				<div>
					{movies.filter(movie => movie.poster_path).map(movie =>
						<Movies movie = {movie}  key={movie.id}/>
					)}
				</div>
			</div>
		</div>
	</div>

	)
}