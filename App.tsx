import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Icon name="arrow-back-outline" size={24} color='#ffffff'></Icon>
          <Text style={styles.headerText}>Post</Text>
          <Icon name="ellipsis-horizontal-outline" size={24} color='#ffffff'></Icon>
        </View>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.aliasText}>Fever Global</Text>
          <Text style={styles.userText}>@fever_gl</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus totam optio minus suscipit illum reiciendis et? Distinctio saepe quae libero doloremque alias! Repudiandae deserunt quidem nesciunt corrupti saepe vel possimus!
          </Text>
          <Image
            source={require('./assets/tweetImage.png')}
            style={styles.image}
          />
          <Text style={styles.footerText}>5:45 AM - 2024-12-16 - 3.9K Views</Text>
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
    marginTop: 20,
  },
  aliasText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userText: {
    color: '#737373'
  },
  image: {
    width: 350,
    height: 350,
    justifyContent: 'center',
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 10
  },
  footerText: {
    color: '#737373',
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'flex-end',
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12,
  },
  headerText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 18,
  }
});
