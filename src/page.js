import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'antd';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Grid, Typography } from '@material-ui/core';

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            favorite: [],
            listen: []
        };
    }
    componentDidMount() {
        this.setState({
            // songs: data.playlist,
            // favorite: data.playlist
        });
    }

    _addListen = value => {
        this.setState({
            listen: [...this.state.listen, value],
        });
    }
    _addLove = value => {
        this.setState({
            favorite: [...this.state.favorite, value]
        });
    }
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Text only
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6">
                            Icon with text
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Page;
