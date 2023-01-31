import React from 'react'
import { Films } from '../../shared/ListOfFilms'
import './Film.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function FilmsPre({ films }) {
    return (
        <div className='container mt-2'>
            <div className='row'>
                {Films.map((Films, index) => (
                    <div className='column col-sm-4' key={index}>
                        <div className='card'>
                            <img id="image" src={Films.img} alt='' />
                            <h3>{Films.title} - {Films.nation}</h3>
                            <p className='title'>{Films.year}</p>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
