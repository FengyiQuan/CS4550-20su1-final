export const findReviewsForJob = (jid) =>
    fetch(`http://localhost:8080/api/jobs/${jid}/reviews`)
        .then(response => response.json());

export const findReviewByUsername = (username) =>
    fetch(`http://localhost:8080/api/profiles/${username}/reviews`)
        .then(response => response.json());

export const createReview = (jid, username, review) =>
    fetch(`http://localhost:8080/api/jobs/${jid}/reviews/${username}`,
          {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(review)
          }
    ).then(response => response.json());

export const deleteReview = (rid) =>
    fetch(`http://localhost:8080/api/reviews/${rid}`,
          {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
              }

          }).then(response => response.json());

export const updateReview = (rid, newReview) =>
    fetch(`http://localhost:8080/api/reviews/${rid}`,
          {
              method: 'PUT',
              headers: {
                  'content-type': 'application/json'
              },
              body: JSON.stringify(newReview)

          }).then(response => response.json());
