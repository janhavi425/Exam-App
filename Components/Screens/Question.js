import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BasicButton } from '@phomea/react-native-buttons';

import Icon from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');
let arrnew = [];
//storing questions,answer, option in jsonData constant
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option4',
        options: {
          option1: 'List',
          option2: 'Dictionary',
          option3: 'Tuple',
          option4: 'Class',
        },
        question: 'Which of these is not a core data type?',
      },
      question2: {
        correctoption: 'option1',
        options: {
          option1: 're',
          option2: 'regex',
          option3: 'pyregex',
          option4: 'None of the above',
        },
        question: 'Which module in Python supports regular expressions?',
      },
      question3: {
        correctoption: 'option2',
        options: {
          option1: 'w',
          option2: 'wb',
          option3: 'r+',
          option4: 'a',
        },
        question: 'Which code is used to open a file for binary writing?',
      },
      question4: {
        correctoption: 'option4',
        options: {
          option1: 'float',
          option2: 'bool',
          option3: 'dict',
          option4: 'int',
        },
        question: 'What is the return type of id?',
      },
      question5: {
        correctoption: 'option3',
        options: {
          option1: 'String',
          option2: 'Numbers',
          option3: 'Slice',
          option4: 'List',
        },
        question: 'Which of the following data type is not supported in python',
      },
    },
  },
};
export default class Question extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;
    
    const jdata = jsonData.quiz.quiz1;
    //storing data in array arrnew
    arrnew = Object.keys(jdata).map(function (k) {
      return jdata[k];
    });

    //declaration of state variables
    this.state = {
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
      pressedop: 'option0',
      pressed:false
    };
  }
  //function to go next
  next() {

    //if next button pressed for last button then it will display score so, following is the condition for that
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      //passing score to quizFinish in Quiz.js file
      this.props.quizFinish((this.score * 100) / 5);
    }
  }
  //function to calculate score by checking correctness
  _answer(ans, status = true) {
    console.log(this.score)
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({ countCheck: count });
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } 
    this.next()
  }

  //function to set selected option in pressedop state variable
  _changeOption(Option) {
    this.setState({ pressedop: Option });
   
  }
  render() {
    let _this = this;
    //currentOptions contain list of options of question
    const currentOptions = this.state.options;
    //mapping question options in form of buttons
    const options = Object.keys(currentOptions).map(function (k) {
      return (
        
        <BasicButton
          onPress={() => _this._changeOption(k)}
          title={currentOptions[k]}
          color="black"
          textStyle={{
            color: '#696969',
            fontWeight: 'bold',
            alignSelf: 'center',
            fontSize: 20,
          }}
          buttonStyle={{
            margin: 10,
            paddingTop: 10,
            width: width - 130,
            alignSelf: 'center',
            paddingBottom: 10,
            paddingRight: 20,
            paddingLeft: 20,
            backgroundColor: '#bdbdbd',
            borderRadius: 10,
          }}
        />
      );
    });

    return (
      <LinearGradient
        colors={('#444444', ['#333333', '#222222', '#111111'])}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <LinearGradient
          colors={['#111111', '#222222', '#444444']}
          style={styles.oval}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.welcome}>{this.state.question}</Text>
          </View>
        </LinearGradient>
       
        <View
          style={{
            flex: 1,
            backgroundColor: '#111111',
            justifyContent: 'center',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            width: '80%',
            alignSelf: 'center',
            height: 100,
          }}>
          <View
            style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <View>{options}</View>
          </View>
        </View>
        <View
          style={{
            width: '40%',
            alignItems: 'center',
            flex: 0.5,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <LinearGradient
            colors={['#6baf92', '#4e9c81', '#207567', '#207567']}
            style={{
              height: 40,
              width: '80%',
              marginTop: 10,
              elevation: 0.8,
              borderRadius: 10,

              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={() => this._answer(this.state.pressedop)}>
              <Text style={{ alignSelf: 'center' }}>Save & Next</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 95,
    borderRadius: 20,
    backgroundColor: 'green',
    height: '13%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 40,
    elevation: 10,
  },
  
  welcome: {
    fontSize: 20,
    margin: 15,
    color: 'white',
  },
  
});
