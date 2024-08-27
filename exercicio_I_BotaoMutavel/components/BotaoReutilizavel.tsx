import react from 'react'; 
import { TouchableOpacity, Text, StyleSheet, Pressable, View  } from 'react-native';

export default function BotaoReutilizavel  ({ onPress, label }) {

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.botaoStyle}> 
        <Text style={styles.buttonLabel}> {label} </Text>
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 70,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  botaoStyle: {backgroundColor: '#fff',
  padding: 10,
  borderRadius: 5,
  width: 200},
  
  buttonLabel: {
    alignItems: 'center',
  },
});


