export const createJob = (job) => {
    return fetch(`http://localhost:8080/api/jobs`,
          {
              method: 'POST',
              body: JSON.stringify(job),
              headers: {
                  'content-type': 'application/json'
              }
          }).then(response => response.json());
}

export const findJobById = (jid)=>
  {
      return fetch(`http://localhost:8080/api/jobs/${jid}`)
          .then(response => response.json()).catch(e=>{});}