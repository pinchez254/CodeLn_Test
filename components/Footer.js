import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');


class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    flex:1,
                     alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'gray',
                    height:'100%'

                }}>
                    <Icon name="md-call" size={35} color="green" />
                </View>

                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'blue',
                    height:'100%'
                }}>
                    <Icon name="ios-mail" size={35} color="green" />
                </View>
            </View>
        );
    }
}
export default Footer;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        elevation: 5,
        width: width,
        flexDirection: 'row'

    }
});