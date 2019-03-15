import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'search' };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingTop:20}}>
          <Icon name="ios-menu" size={35} color="green" />
        </View>
        <View style={styles.InputWrapper}>
          <TextInput
            keyboardType="twitter"
            autoFocus={false} // focus and show the keyboard
            placeholder="search..."
            style={styles.input}
            onChangeText={this.onChangeText} // handle input changes
          />
        </View>
        <View style={{paddingTop:20}}>
          <Icon name="md-search" size={35} color="green" />
        </View>
      </View>
    );
  }
}
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    height: height * 0.1,
    elevation: 5,
    width: width,
   
  },
  InputWrapper: {
    height: '50%',
    width: '70%',
    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 10,
    fontSize: 15,
    backgroundColor: 'white',
    padding: 10,
  },
});
