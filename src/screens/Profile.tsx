import { useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';



export default function Profile() {

  
  const route = useRoute();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:22,
    fontWeight:'bold'
  }
});
