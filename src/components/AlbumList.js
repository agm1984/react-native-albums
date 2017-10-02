import React, { Component } from 'react'
import { View } from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    constructor(props) {
        super(props)
        this.state = { albums: [] }
    }

    componentWillMount() {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => response.json())
            .then((payload) => this.setState({ albums: payload }))
    }

    renderAlbums() {
        return this.state.albums.map((a) => <AlbumDetail key={a.title} album={a} />)
    }

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList
