export const createJob = (job) => {
    return fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs`,
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
      return fetch(`https://cs4550-20su1-team2-jobigger.herokuapp.com/api/jobs/${jid}`)
          .then(response => response.json()).catch(e=>{});}