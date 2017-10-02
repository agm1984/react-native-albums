import React from 'react'
import { View, Image, Text } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'

// inside Card, props.children = each album
const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image } = album
    const { thumbnailStyle, headerContentStyle } = styles

    return (
        <Card>
            <CardSection>
            <View>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSection>
        </Card>
    )
}

const styles = {
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default AlbumDetail
