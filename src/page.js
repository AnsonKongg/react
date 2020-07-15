import React, { Component } from 'react';
import data from './db.json';
import { Menu, Dropdown, Card, Layout, Button, Row, Col, Icon } from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';
import { SearchOutlined, HeartOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

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
            songs: data.playlist,
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
        console.log(this.state.songs);
        const style = { background: '#0092ff', padding: '8px 0' };

        return (
            <div style={{ flex: 1, flexDirection: "row" }}>
                <Row>
                    <Col span={8}>
                        <header style={{ padding: 10, marginLeft: 50 }}>
                            <h1>Playlist</h1>
                        </header>
                        <div style={{ width: 300 }}>
                            {this.state.songs.length > 0 ? (
                                <div>
                                    {this.state.songs.map((value, index) => {
                                        return (
                                            <Card size="small" style={{ width: 300, }} key={index}>
                                                <p>{value.artist}</p>
                                                <p>{value.track}</p>
                                                <div style={{ flex: 1, flexDirection: "row" }}>
                                                    {value.listened ?
                                                        <Button onClick={() => { this._addListen(value) }} icon={<SearchOutlined />}>
                                                        </Button> :
                                                        <Button style={{ color: 'green' }} onClick={() => { this._addListen(value) }} icon={<SearchOutlined />}>
                                                        </Button>
                                                    }
                                                    {value.favourite ?
                                                         <Button style={{ color: 'red', marginLeft: 10 }} onClick={() => this._addLove(value)} icon={<HeartOutlined />}>
                                                         </Button> :
                                                        <Button style={{ marginLeft: 10 }} onClick={() => { this._addListen(value) }} icon={<SearchOutlined />}>
                                                        </Button>
                                                    }
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            ) : (
                                    <span></span>
                                )
                            }
                        </div>
                    </Col>
                    <Col span={8}>
                        <header style={{ padding: 10, marginLeft: 50 }}>
                            <h1>Listened</h1>
                        </header>
                        <div style={{ width: 300 }}>
                            {this.state.listen.length > 0 ? (
                                <div>
                                    {this.state.listen.map((value, index) => {
                                        return (
                                            <Card size="small" style={{ width: 300, }} key={index}>
                                                <p>{value.artist}</p>
                                                <p>{value.track}</p>
                                                <div style={{ flex: 1, flexDirection: "row" }}>
                                                    <Button icon={<SearchOutlined />} ></Button>
                                                    <Button style={{ marginLeft: 10 }} icon={<HeartOutlined />}></Button>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            ) : (
                                    <span></span>
                                )
                            }
                        </div>
                    </Col>
                    <Col>
                        <div style={{ width: 300 }}>
                            <header style={{ padding: 10, marginLeft: 50 }}>
                                <h1>Favorite</h1>
                            </header>
                            {this.state.favorite.length > 0 ? (
                                <div>
                                    {this.state.favorite.map((value, index) => {
                                        return (
                                            <Card size="small" style={{ width: 300, }} key={index}>
                                                <p>{value.artist}</p>
                                                <p>{value.track}</p>
                                                <div style={{ flex: 1, flexDirection: "row" }}>
                                                    <Button icon={<SearchOutlined />}></Button>
                                                    <Button type="primary" style={{ marginLeft: 10 }} icon={<HeartOutlined />}></Button>
                                                </div>
                                            </Card>
                                        );
                                    })}
                                </div>
                            ) : (
                                    <span></span>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Page;
