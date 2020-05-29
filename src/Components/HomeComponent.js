import React from 'react';
import service from "../adzuna/AdzunaAPIService";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    keywordChanged = (event) =>
        this.setState({keyword: event.target.value});


    searchMovie = () => service.getInstance().searchMovie(this.state.keyword)
        .then(response => this.renderMovies(response))
        .catch(err => {
            console.log(err);
        });

    render() {
        return (
            <div>
                <h2>Search Jobs</h2>
                <div className="input-group">
                    <input value={this.state.keyword}
                           onChange={this.keywordChanged}
                           className="form-control"
                           placeholder="keyword"/>
                    <div className="input-group-append">
                        <button
                            onClick={this.searchMovie}
                            className="btn btn-primary">
                            Search
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                    {
                        this.state.movies.map(
                            (movie, index) =>
                                <li key={index} className="list-group-item">
                                    {movie.title}</li>)
                    }
                </ul>
            </div>
        )
    }
}
