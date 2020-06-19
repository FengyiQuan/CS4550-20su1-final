import {createJob} from "./JobService"

export const addToWishList = (jid, username) =>
    fetch(`https://cs4550-20su1-jobigger-server.herokuapp.com/api/${username}/wishlist/${jid}`,
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
    fetch(`https://cs4550-20su1-jobigger-server.herokuapp.com/api/${username}/wishlist/${jid}`,
          {
              method: 'DELETE',
              headers: {
                  'content-type': 'application/json'
              }
          }).then(response => response.json());
