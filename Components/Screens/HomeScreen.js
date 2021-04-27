import * as React from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <>
    <LinearGradient colors={"#444444",["#333333",'#222222', '#111111']} style={{ flex: 1 }}>
    <View >
    
      <LinearGradient
        colors={["#656565", '#383838', '#000000']}
        style={styles.button}>
        <TouchableOpacity onPress={() =>
                    navigation.navigate("Quiz")
                  }>
          <Text style={styles.text}>Start Test</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    </LinearGradient>
    </>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: '80%',
    height: 60,
    justifyContent: 'center',
    elevation: 0.8,
marginTop:"70%",
    borderRadius: 20,
  },
  text: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});
