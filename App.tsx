import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam optio minus suscipit illum reiciendis et? Distinctio saepe quae libero doloremque alias! Repudiandae deserunt quidem nesciunt corrupti saepe vel possimus!
          </Text>
        </View>
      </ScrollView> 
      <View style={styles.footer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgb(7, 7, 7)',
    width: Dimensions.get('window').width,
    height: 100,
  },
  main: {
    height: 800,
    marginTop: 146.5,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  footer: {
    width: Dimensions.get('window').width,
    height: 90,
    backgroundColor: 'rgb(7, 7, 7)',
    borderTopWidth: 1,
    borderTopColor: 'rgb(49, 52, 55)', 
  },
  text: {
    color: '#ffffff',
  }
});
