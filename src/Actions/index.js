export const getPlayList = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:5000/playlist')
        const resData = await response.json();
        let items = resData;
        let listenList = [];
        let favourList = [];
        items.forEach(element => {
            if (element.listened) {
                listenList.push(element);
            }
            if (element.favourite) {
                favourList.push(element);
            }
        });

        dispatch({
            type: 'GET_PLAY_LIST',
            playList: items,
            listenList,
            favourList
        });
    }
}
export const updatePlayList = (id, para) => {
    return async dispatch => {
        const getPlay = await fetch(`http://localhost:5000/playlist/${id}`)
        const data = await getPlay.json()
        let updatePlay;
        if (para === "listen") {
            updatePlay = { ...data, listened: !data.listened }
        } else {
            updatePlay = { ...data, favourite: !data.favourite }
        }

        const res = await fetch(`http://localhost:5000/playlist/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatePlay),
        })
        const resData = await res.json();
        let item = resData;
        dispatch({
            type: 'UPDATE_PLAY_LIST',
            kind: para,
            updatePlay: item
        });
    }
}