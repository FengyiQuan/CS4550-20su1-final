import React from 'react';
import service from "../services/RapidAPIService";

export default class HomeComponent
    extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            movies: []
        }
    }

    keywordChanged = (event) =>
        this.setState({keyword: event.target.value});

    renderMovies = (response) => console.log(response);
    // this.setState({
    //
    //                   movies: response
    //               });

    searchMovie = () =>
        fetch("https://linkupjobsearch-linkup-job-search-v1.p.rapidapi.com/developers/v-1/search-handler.js?api_key=%7Bapi_key%7D&embedded_search_key=%7Bsearch_key%7D&orig_ip=%7Bip_addr%7D&keyword=python&location=%7Blocation%7D&distance=%7Bradius%7D", {
            "method": "GET",
            "headers": {
                "authorization": "Basic ODQwMDczNTg4ekBnbWFpbC5jb206cnVxaXVsaXhpYTAyMjA=",
                "x-rapidapi-host": "linkupjobsearch-linkup-job-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "94f3530a4emsh5a91276337743aap145e96jsn5dbe2401da70"
            }
        })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    // fetch(`https://jobs.github.com//position?description=${this.state.keyword}`).then(response
    // => response.json) .then(this.renderMovies); service.searchMovie(this.state.keyword).then(
    // (promise) => console.log(promise) );
    renderMovies = (response) =>
        console.log(response)

    render() {
        return (
            <div>
                <h2>Search Movies</h2>
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
                                    {movie.Title}</li>)
                    }
                </ul>
            </div>
        )
    }
}
