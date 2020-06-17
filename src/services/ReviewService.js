export const findReviewsForJob = (jid) =>
    fetch(`http://localhost:8080/api/jobs/${jid}/reviews`)
        .then(response => response.json())

export const findReviewByUsername = (usrname) =>
    fetch(`http://localhost:8080/api/profiles/{username}/reviews`)
        .then(response => response.json())

export const createReview = (jid, review) =>
    fetch("http://localhost:8080/api/jobs/{jid}reviews/",
          {
              method: 'POST',
              credentials: 'include',
              headers: {
                  'content-type': 'application/json'
              }
          }
    ).then(response => response.json())
