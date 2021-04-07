let playListState = {
    type: "",
    playList: [],
    listenList: [],
    favourList: [],
};
const playlistReducer = (state = playListState, action) => {
    switch (action.type) {
        case 'GET_PLAY_LIST':
            return {
                ...state,
                type: action.type,
                playList: action.playList,
                listenList: action.listenList,
                favourList: action.favourList,
            };
        case 'UPDATE_PLAY_LIST':
            let foundPlayIndex = state.playList.findIndex(x => x.id === action.updatePlay.id);
            state.playList[foundPlayIndex] = action.updatePlay;
            if (action.kind === "listen") {
                let foundIndex = state.favourList.findIndex(x => x.id === action.updatePlay.id);
                state.favourList[foundIndex] = action.updatePlay;
                action.updatePlay.listened ? state.listenList.push(action.updatePlay) : state.listenList.splice(state.listenList.findIndex(x => x.id === action.updatePlay.id), 1);
            } else {
                let foundIndex = state.listenList.findIndex(x => x.id === action.updatePlay.id);
                state.listenList[foundIndex] = action.updatePlay;
                action.updatePlay.favourite ? state.favourList.push(action.updatePlay) : state.favourList.splice(state.favourList.findIndex(x => x.id === action.updatePlay.id), 1);
            }
            return {
                ...state,
                type: action.type,
            };
        default:
            return state;
    }
}

export default playlistReducer;