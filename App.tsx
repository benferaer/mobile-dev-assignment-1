import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Icon name="arrow-back-outline" size={24} color='#ffffff'></Icon>
          <Text style={styles.headerText}>Post</Text>
          <Icon name="ellipsis-horizontal-outline" size={24} color='#ffffff'></Icon>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.userContainer}>
          <Image
            source={require('./assets/userIcon.png')}
            style={styles.userIcon}
          />      
          <View>
            <Text style={styles.aliasText}>Fever Global</Text>
            <Text style={styles.userText}>@fever_gl</Text>          
          </View>
        </View>
        <Text style={styles.tweetText}>
          All aboard: Horizon Of Khufu is now open in Calgary, transporting you to Ancient Egypt! 🐪
          It's time to step back 4,500 years ion the past! ⏳
        </Text>
        <Image
          source={require('./assets/tweetImage.png')}
          style={styles.tweetImage}
        />      
        <Text style={styles.subText}>From feverup.com</Text>     
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>5:45 AM &#183; 2024-12-16 &#183;</Text>
          <Text style={styles.viewCount}>3.9K</Text>
          <Text style={styles.statsText}>Views</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {alert("Alert Button Pressed")}}>
          <Text style={styles.buttonText}>Alert</Text>    
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.replyBox}>
          <Text style={styles.replyText}>
            Post your reply
          </Text>
        </View>
        <View style={styles.navbar}>
        <Icon name="home-outline" size={24} color='#ffffff'></Icon>
        <Icon name="search-outline" size={24} color='#ffffff'></Icon>
        <Icon name="logo-twitter" size={24} color='#ffffff'></Icon>
        <Icon name="people-outline" size={24} color='#ffffff'></Icon>
        <Icon name="notifications-outline" size={24} color='#ffffff'></Icon> 
        <Icon name="mail-outline" size={24} color='#ffffff'></Icon>
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


// All Header View Styles

  header: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    backgroundColor: 'rgb(7, 7, 7)',
    width: Dimensions.get('window').width,
    height: '11%',
  },
  headerRow: {
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


// All Main View Styles

  main: {
    height: '67%',
    marginTop: '15%',
    marginBottom: '10%',
    width: Dimensions.get('window').width,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: Dimensions.get('window').width,
    height: 'auto'
  },
  userText: {
    color: '#737373',
    width: 100,
    marginLeft: 10,
  },
  aliasText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
    width: 100,
    marginLeft: 10,
    marginTop: 5,
  },
  userIcon: {
    width: 50,
    height: 50,
    marginLeft: 7,
  },
  tweetText: {
    color: '#ffffff',
    marginTop: 20,
    marginLeft: 3,
    fontSize: 18,
    paddingLeft: 7,
    paddingRight: 15
  },
  tweetImage: {
    width: Dimensions.get('window').width - 5,
    height: 340,
    marginTop: 20,
    resizeMode: 'contain',
  },
  subText: {
    color: '#70767C',
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 5,
    marginLeft: 10,
  },
  statsText: {
    color: '#737373',
  },
  viewCount: {
    color: '#ffffff',
  },
  button: {
    height: '5%',
    backgroundColor: '#202327',
    width: Dimensions.get('window').width - 20,
    borderRadius: 40,
    margin: 5,
    paddingTop: 5

  },
  buttonText: {
    color: '#71767B',
    textAlign: 'center',
  },

// All Footer View Styles

  footer: {
    width: Dimensions.get('window').width,
    height: '12%',
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
    paddingLeft: 13,
    paddingTop: 10,
  },
  replyText: {
    color: '#71767B',
    fontSize: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight:15,
    marginTop: 5,
    backgroundColor: '#070707'
  },
});
