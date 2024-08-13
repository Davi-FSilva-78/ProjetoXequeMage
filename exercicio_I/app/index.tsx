import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import {useState, useRef, useEffect } from 'react';
import BotaoReutilizavel from "../components/BotaoReutilizavel";
import { hideAsync } from "expo-splash-screen";

  export default function App() {

    const [isImageVisible, setImageVisible] = useState(null)
    const handlePress = () => {
      alert('Faz o L!');
    }
  

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}> 
          <BotaoReutilizavel label="Faça o L aqui e Agora" corFundo="#f00" onPress={ handlePress } />
          <BotaoReutilizavel label="Faz o L agora" corFundo="#00f" onPress={( handlePress )}/>
        </View>

        <Image
        style={styles.timao}
        source={require('../components/img/cortinas.jpg')}
        />
        
        </ScrollView>
      </SafeAreaView>

      
    );
  }
    
    const styles = StyleSheet.create({
      
    });
    
  

 
