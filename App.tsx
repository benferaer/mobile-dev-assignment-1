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
            All aboard: Horizon Of Khufu is now open in Calgary, transporting you to Ancient Egypt! 🐪
            It's time to step back 4,500 years ion the past! ⏳
          </Text>
          <Image
            source={require('./assets/tweetImage.png')}
            style={styles.image}
          />      
          <Text style={styles.subText}>From feverup.com</Text>     
          <View style={styles.statsRow}>
            <Text style={styles.footerText}>5:45 AM &#183; 2024-12-16 &#183;</Text>
            <Text style={styles.viewCount}>3.9K</Text>
            <Text style={styles.viewsLabel}>Views</Text>
          </View>
        </View>
      </ScrollView> 
      <View style={styles.footer}>
        <View style={styles.replyBox}>
          <Text style={styles.replyText}>
            Post your reply
          </Text>
        </View>
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
    height: 130,
    backgroundColor: 'rgb(7, 7, 7)',
    borderTopWidth: 1,
    borderTopColor: 'rgb(49, 52, 55)', 
  },
  replyBox: {
    backgroundColor: '#202327',
    width: Dimensions.get('window').width - 20,
    height: 40,
    borderRadius: 40,
    margin: 10,
  },
  replyText: {

  },
  text: {
    color: '#ffffff',
    marginTop: 20,
    fontSize: 18,
  },
  subText: {
    color: '#70767C',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  aliasText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },
  userText: {
    color: '#737373'
  },
  image: {
    width: Dimensions.get('window').width - 5,
    height: 375,
    marginTop: 20,
    resizeMode: 'contain',
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
  },
  viewCount: {
    color: '#ffffff',
  },
  viewsLabel: {
    color: '#737373',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 5,
  }
});
