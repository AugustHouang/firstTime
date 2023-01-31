import React, { Component } from 'react'
import { Films } from '../shared/ListOfFilms'
import FilmsPre from './Films/FilmsPre'
export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            Films: Films
        };
    }
    render() {
        return <FilmsPre films={this.state.films} />


    }
}
