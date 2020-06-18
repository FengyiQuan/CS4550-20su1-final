export const createJob = (job) => {console.log(JSON.stringify(job))
    return fetch(`http://localhost:8080/api/jobs`,
          {
              method: 'POST',
              body: JSON.stringify(job),
              headers: {
                  'content-type': 'application/json'
              }
          }).then(response => response.json());
}