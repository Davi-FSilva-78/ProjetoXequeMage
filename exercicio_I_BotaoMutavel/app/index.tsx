import {useState } from 'react';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import BotaoReutilizavel from "../components/BotaoReutilizavel"; 
import ImageViewer from '../components/imageViewer';

const PlaceholderImage = require('../assets/images/background.png'); //imagem inicial

export default function App() {

  const [isImageVisible, setImageVisible] = useState<boolean | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}> 
        <ImageViewer placeholderImageSource = {PlaceholderImage}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
