export const findReviewsForJob = (jid) =>
    fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/${jid}/reviews`)
        .then(response => response.json());

export const findReviewByUsername = (username) =>
    fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/profiles/${username}/reviews`)
        .then(response => response.json());

export const createReview = (jid, username, review) =>
    fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/${jid}/reviews/${username}`,
          {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(review)
          }
    ).then(response => response.json());

export const deleteReview = (rid) =>
    fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/reviews/${rid}`,
          {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
              }

          }).then(response => response.json());

export const updateReview = (rid, newReview) =>
    fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/reviews/${rid}`,
          {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newReview)

          }).then(response => response.json());
