import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Text, View, FlatList } from "react-native";
import react, { useEffect, useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyAi8OIFjk2ACT4yMvruosIqNJu8J_VXEsM",
  authDomain: "meuprimeirofirebase-40b37.firebaseapp.com",
  projectId: "meuprimeirofirebase-40b37",
  storageBucket: "meuprimeirofirebase-40b37.appspot.com",
  messagingSenderId: "314153310641",
  appId: "1:314153310641:web:32690b99277704e1698590"
};

firebase.initializeApp(firebaseConfig);

export default function Index() {
  
  const [nomes, setNomes] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach ((doc) => {
        data.push({id: doc.id, ...doc.data() });
      });

      setNomes(data);

    };

    fetchData();

  }, []);

  return (
    <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> Lista de Nomes: </Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text> {item.Nome} {item.Sobrenome} </Text>
          </View>
        )}
        />
    </View>
  );
  }
