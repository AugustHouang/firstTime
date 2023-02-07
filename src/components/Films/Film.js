import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import { useState } from 'react';
import './Film.css'
import 'bootstrap/dist/css/bootstrap.min.css';
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
                            <button onClick={() => { setFilm(film) }}>
                                <a href='#popup1' id='openPopup'>


                                    Detail</a></button>
                        </div>
                    </div>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img src={film.img} alt='' />
                        <h2>{film.name}</h2>
                        <a className='close' href='#cl'>&times;</a>
                        <div className='content'>
                            {film.info}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
