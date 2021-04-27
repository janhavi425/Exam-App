import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Question from './Question'
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizFinish: false,
      score: 0,
    };
  }
 //function to display result
  _quizFinish(score) {
    this.setState({ quizFinish: true, score: score });
  }
  //different conditions to evaluate student progress based on marks
  _scoreMessage(score) {
    if (score <= 30) {
      return (
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You need to work hard</Text>
          <Text style={styles.score}>You scored {score}%</Text>
        </View>
        
      );
    } else if (score > 30 && score < 60) {
      return (
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You are good</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    } else if (score >= 60) {
      return (
        <View style={styles.innerContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
            <Icon name="trophy" size={30} color="white" />
          </View>
          <Text style={styles.score}>You are the master</Text>
          <Text style={styles.score}>Congrats you scored {score}% </Text>
        </View>
      );
    }
  }
  render() {
    return (
      
      <View style={{ flex: 1}}>

       

        {this.state.quizFinish ? (
          <LinearGradient style={styles.container} colors={["#656565", '#383838', '#000000',"#111111"]}>
          <View>
          <LinearGradient style={styles.circle} colors={["#111111", '#000000', '#383838',"#656565",]}>
            <View >
              {this._scoreMessage(this.state.score)}
            </View>
            </LinearGradient>
          </View>
          </LinearGradient>
        ) : (
          <Question quizFinish={(score) => this._quizFinish(score)} />
        )}
      </View>
    );
  }
}
const scoreCircleSize = 300;
const styles = StyleSheet.create({
  score: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scoreCircleSize,
    height: scoreCircleSize,
    borderRadius: scoreCircleSize / 2,
    backgroundColor: 'green',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  
});
