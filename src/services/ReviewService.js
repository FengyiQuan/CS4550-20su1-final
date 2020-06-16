export const findReviewsForJob = (jid) =>
    fetch(`http://localhost:8080/api/jobs/${jid}/reviews`)
    .then(response => response.json())