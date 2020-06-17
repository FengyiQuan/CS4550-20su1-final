import React from 'react';

export default class ReviewListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }

    componentDidMount() {
        this.props.findReviewForJob(this.props.params.id)
    }

    render() {
        return (
            <div>
                <h2>REVIEWS</h2>
                <ul className="list-group">
                    {this.state.reviews.map(
                        review => <li className="list-group-item my-3 mx-5">{review.text}</li>)}
                    {/*{console.log(this.props)}*/}
                </ul>
            </div>)
    }

}