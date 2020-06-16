import React from 'react';

export default class ReviewListComponent extends React.Component {

    render() {
        console.log(this)

        // const reviews = [{"text":"abc"}]

        return (<div>
            <h2>REVIEWS</h2>
            <ul className="list-group">
                {this.props.reviews.map(
                    review => <li className="list-group-item">{review.text}</li>)}
                {/*{console.log(this.props)}*/}
            </ul>
        </div>)
    }

}