import { TouchableOpacity, Text, StyleSheet, Pressable, View  } from 'react-native';

export default function BotaoReutilizavel  ({ onPress, label }) {

  return (
    <View>
      <Pressable 
      onPress={onPress} 
      style={styles.botaoStyle}
    >
        
        <Text> {label}</Text>
      
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  botaoStyle: {backgroundColor: '#fff',
  padding: 10,
  borderRadius: 5,
  width: 200}
});


