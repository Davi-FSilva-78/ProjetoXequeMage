import React from 'react';
import { View, StyleSheet } from 'react-native';
import BotaoProps from '../components/BotaoProps';

const App = () => {
  const handlePress = () => {
    console.log('Botão pressionado!');
  }

  const handlePressII = () => {
    alert('Faz o L');
  };

  return (
    <View style={styles.container}> 
      <BotaoProps label="Clique Aqui" corFundo="#0f0" onPress={handlePress} />
      <BotaoProps label="Clique Agora" corFundo="#f00" onPress={handlePress} />
      <BotaoProps label="Faz o L agora" corFundo="#00f" onPress={(handlePressII)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;