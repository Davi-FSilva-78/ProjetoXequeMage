import { Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image,  } from "react-native";
import {useState, useRef, useEffect } from 'react';
import BotaoReutilizavel from "../components/BotaoReutilizavel";
import { hideAsync } from "expo-splash-screen";

  export default function App() {

    const [isImageVisible, setImageVisible] = useState(null);
    const [showAppOptions, setShowAppOptions]  = useState(false);

    const handlePress = () => {
      alert('Faz o L!');
    }
  

    return (
      
      {showAppOptions ? (
         <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        
        <View style={styles.container}> 
          
          <BotaoReutilizavel 
            label="Cortinas"  
            onPress={ handlePress } 
          />
          <BotaoReutilizavel 
          label="Peixasso"  
          onPress={( handlePress )}
          />  
        </View>
        </ScrollView>

      ) : (
        <View>
          
          <Image
          style={styles.timao}
          source={require('../components/img/cortinas.jpg')}
          />

        </View>

        ); 
      };
     
    ) 
  }
    
    const styles = StyleSheet.create({
      container : {

      }, 
      scrollView: { 

      },


    });
    
  

 
