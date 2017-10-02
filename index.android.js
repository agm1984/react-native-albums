// index.android.js - place code in here for Android

// import a library to help create a component
import React from 'react'
import { AppRegistry, View } from 'react-native'
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

// create a component
const App = () => {
    return (
        <View>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    )
}

// render it to the device
// name 'albums' must match the project name
// only the Root Component uses AppRegistry (React.AppRegistry)
AppRegistry.registerComponent('albums', () => App)
