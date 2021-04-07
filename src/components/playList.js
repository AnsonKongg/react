import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlayList, updatePlayList } from '../Actions/index';
import { Grid, List, ListItem, ListItemText, ListSubheader, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HeadsetIcon from '@material-ui/icons/Headset';

function PlayList(props) {
    const reducer = useSelector(state => state.Reducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchPlayList = async () => {
            await dispatch(getPlayList());
        };

        fetchPlayList();
    }, [dispatch])

    return (
        <div style={{ padding: 20, paddingLeft: 200, paddingRight: 200 }}>
            <Grid container spacing={6}>
                <Grid item xs={4}>
                <List
                        style={{ alignContent: 'center', width: '70%' }}
                        subheader={
                            <ListSubheader style={{ fontSize: 25, backgroundColor: '#562076', color: 'white' }}>
                                Favourite
                            </ListSubheader>
                        }
                    >
                        {reducer.favourList && reducer.favourList.length > 0 ?
                            reducer.favourList.map((song, index) => {
                                return (
                                    <ListItem key={song.id} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f6f5f6" }}>
                                        <ListItemText
                                            primary={song.artist}
                                            secondary={song.track}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="listen"
                                            >
                                                <HeadsetIcon style={{ color: song.listened ? "green" : "#bdbdbd" }} />
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                aria-label="favourite"
                                                onClick={() => dispatch(updatePlayList(song.id, "favourite"))}
                                            >
                                                <FavoriteIcon color={song.favourite ? "secondary" : "disabled"} />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })
                            : <span></span>
                        }
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List
                        style={{ alignContent: 'center', width: '70%' }}
                        subheader={
                            <ListSubheader style={{ fontSize: 25, backgroundColor: '#562076', color: 'white' }}>
                                Listened
                            </ListSubheader>
                        }
                    >
                        {reducer.listenList && reducer.listenList.length > 0 ?
                            reducer.listenList.map((song, index) => {
                                return (
                                    <ListItem key={song.id} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f6f5f6" }}>
                                        <ListItemText
                                            primary={song.artist}
                                            secondary={song.track}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="listen"
                                                onClick={() => dispatch(updatePlayList(song.id, "listen"))}
                                            >
                                                <HeadsetIcon style={{ color: song.listened ? "green" : "#bdbdbd" }} />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="favourite">
                                                <FavoriteIcon color={song.favourite ? "secondary" : "disabled"} />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })
                            : <span></span>
                        }
                    </List>
                </Grid>
                <Grid item xs={4}>
                    <List
                        style={{ alignContent: 'center', width: '70%' }}
                        subheader={
                            <ListSubheader style={{ fontSize: 25, backgroundColor: '#562076', color: 'white' }}>
                                Playlist
                    </ListSubheader>
                        }
                    >
                        {reducer.playList && reducer.playList.length > 0 ?
                            reducer.playList.map((song, index) => {
                                return (
                                    <ListItem key={song.id} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f6f5f6" }}>
                                        <ListItemText
                                            primary={song.artist}
                                            secondary={song.track}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton
                                                edge="end"
                                                aria-label="listen"
                                                onClick={() => dispatch(updatePlayList(song.id, "listen"))}
                                            >
                                                <HeadsetIcon style={{ color: song.listened ? "green" : "#bdbdbd" }} />
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                aria-label="favourite"
                                                onClick={() => dispatch(updatePlayList(song.id, "favourite"))}
                                            >
                                                <FavoriteIcon color={song.favourite ? "secondary" : "disabled"} />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                )
                            })
                            : <span></span>
                        }
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlayList;