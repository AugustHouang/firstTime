import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import { useState } from 'react';
import './Film.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import Detail from '../../components/Detail/Detail'
export default function Film() {
    const [film, setFilm] = useState([])
    return (
        <div className='container mt-2'>
            <div className='row'>
                {Films.map((film) => (
                    <div className='column col-sm-4' key={film.id}>
                        <div className='card'>
                            <img src={film.img} alt='' />
                            <h3>{film.title} - {film.nation}</h3>
                            <p className='title'>{film.year}</p>
                            <Link to={`Detail/${film.id}`}>
                                <p> <button>Detail</button></p></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}
