const path = 'https://cs4550-20su1-team2-jobigger.herokuapp.com';

export const getCurrentUser = () => {
    return fetch(`${path}/api/profile`, {
        method: 'POST',
        credentials: "include"
    }).then(response => response.json())
};

export const findProfileByUsername = (username) => {
    return fetch(`${path}/api/profile/${username}`).then(response => response.json())
};

export const updateProfile = (newProfile) => {
    return fetch(`${path}/api/profile`, {
        body: JSON.stringify(newProfile),
        headers: {
            'content-type': 'application/json'
        },
        method: 'PUT',
        credentials: "include"
    })
        .then(response => response.json())
};

export const logout = () => {
    return fetch(`${path}/api/logout`, {
        method: 'POST',
        credentials: "include"
    })

}