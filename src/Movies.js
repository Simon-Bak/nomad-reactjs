import React from "react";
import PropTypes from 'prop-types';

function Movies({id, year, title, summary, poster, genres})
{
    return (<div className="movie">
        <img src={poster} alt={title} title={title} />
<div className='movie_data'>
<h3 className ='movie_titel'>{title}</h3>
<h5 ckassName='movie_year'>{year}</h5>
<ul className='genres'>
{genres.map((genre, index) => (<li className='genres_genre' key={index}>{genre}</li>))}
</ul>
<p className='moivie_summary'>{summary}</p>

</div>
    </div>
    );
}

Movies.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movies;