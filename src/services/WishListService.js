import {createJob} from "./JobService"

export const addToWishList = (jid, username) =>
    fetch(`http://localhost:8080/api/${username}/wishlist/${jid}`,
          {
              method: 'POST',
              headers: {
                  'content-type': 'application/json'
              }
          }).then(response => response.json()).catch(e => {
        createJob(jid)
        return addToWishList(jid, username)
    });

export const removeFromWishList = (jid, username) =>
    fetch(`http://localhost:8080/api/${username}/wishlist/${jid}`,
          {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
              }
          }).then(response => response.json());
