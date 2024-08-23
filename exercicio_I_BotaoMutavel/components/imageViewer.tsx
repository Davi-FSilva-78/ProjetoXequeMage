import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import * as React from 'react';

interface ImageViewerProps {
    placeholderImageSource: ImageSourcePropType;
}

export default function ImageViewer ({ placeholderImageSource }: ImageViewerProps) {
    return (
        <Image source={placeholderImageSource} style={styles.image}/>
    );
}

const styles = StyleSheet.create ({
    image: {
    width: 300,
    height: 400,
    borderRadius: 18,
    },
})