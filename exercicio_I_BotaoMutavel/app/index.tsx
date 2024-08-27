import {useState } from 'react';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import BotaoReutilizavel from "../components/BotaoReutilizavel"; 
import ImageViewer from '../components/imageViewer';

const PlaceholderImage = require('../assets/images/background.png'); //imagem inicial
const cortinasImage = require('../assets/images/cortinas.jpg'); //imagem cortinas
const peixaoImage = require('../assets/images/peixao.png'); //imagem santao

export default function App() {
  const [selectedImage, setSelectedImage] = useState(PlaceholderImage);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);


  const trocarImagem = () => {
    setSelectedImage( prevImg => {
      return prevImg === PlaceholderImage ? cortinasImage : peixaoImage;
  });
       
    };

  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}> 
        <ImageViewer 
        placeholderImageSource = {PlaceholderImage}
        selectedImage={selectedImage}
        />
      </View>
      <StatusBar style="auto" />

      <View>
        <BotaoReutilizavel onPress={trocarImagem} label={"Cortinas"}/>
      </View>

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
